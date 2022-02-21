import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../types/interfaces';

@Component({
    selector: 'app-edit-customer',
    templateUrl: './edit-customer.component.html',
    styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
    @Input() customer!: Customer;

    @Output() submitEvent: EventEmitter<Customer> = new EventEmitter<Customer>();
    @Output() deleteEvent: EventEmitter<Customer> = new EventEmitter<Customer>();

    editable = false;

    editForm: FormGroup;

    constructor() {}
    ngOnInit(): void {
        this.editForm = new FormGroup({
            name: new FormControl({ value: this.customer.name, disabled: true }, [Validators.required]),
            streetAndNumber: new FormControl({ value: this.customer.streetAndNumber, disabled: true }, [
                Validators.required,
            ]),
            city: new FormControl({ value: this.customer.city, disabled: true }, [Validators.required]),
            zipCode: new FormControl({ value: this.customer.zipCode, disabled: true }, [Validators.required]),
            country: new FormControl({ value: this.customer.country, disabled: true }, [Validators.required]),
        });
    }

    submit(): void {
        if (this.editForm.valid) {
            // eslint-disable-next-line
            const customer: Customer = {
                ...this.editForm.value,
                customerId: this.customer.customerId,
            };
            this.submitEvent.emit(customer);
        }
    }

    toggleEditable(): void {
        this.editable = !this.editable;
        if (this.editable) {
            this.editForm.enable();
        } else {
            this.editForm.disable();
        }
    }

    requestDelete(): void {
        this.deleteEvent.emit(this.customer);
    }
}
