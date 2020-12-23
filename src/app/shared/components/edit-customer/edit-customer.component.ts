import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateCustomer, Customer } from '../../types/interfaces';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  
    constructor(
    ) { }

    @Input('customer') customer!: Customer;
  
    @Output('onSubmit') onSubmit: EventEmitter<Customer> = new EventEmitter<Customer>();
  
    editable: boolean = false;
    editForm: FormGroup;
  
    ngOnInit(): void {
      this.editForm = new FormGroup({
        name: new FormControl({ value: this.customer.name, disabled: true }, [Validators.required]),
        streetAndNumber: new FormControl({ value: this.customer.streetAndNumber, disabled: true}, [Validators.required]),
        city: new FormControl({ value: this.customer.city, disabled: true }, [Validators.required]),
        zipCode: new FormControl({ value: this.customer.zipCode, disabled: true}, [Validators.required]),
        country: new FormControl({value: this.customer.country, disabled: true}, [Validators.required])
      });
    }
  
    submit() {
      if (this.editForm.valid) {
        const customer: Customer = {
          ... this.editForm.value,
          customerId: this.customer.customerId
        }
        this.onSubmit.emit(customer);
      }
    }

    toggleEditable() {
      this.editable = !this.editable;
      if (this.editable) {
        this.editForm.enable();
      } else {
        this.editForm.disable();
      }
    }
}
