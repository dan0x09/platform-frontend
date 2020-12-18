import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateCustomer } from '../../types/interfaces';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  
  constructor(
  ) { }

  @Output('onSubmit') onSubmit: EventEmitter<CreateCustomer> = new EventEmitter<CreateCustomer>();

  createForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    streetAndNumber: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
  }

  submit() {
    this.onSubmit.emit(this.createForm.value);
  }
}
