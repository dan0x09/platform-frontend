import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
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

    editForm: UntypedFormGroup;

    constructor() {}
    ngOnInit(): void {
        this.editForm = new UntypedFormGroup({
            name: new UntypedFormControl({ value: this.customer.name, disabled: true }, [Validators.required]),
            streetAndNumber: new UntypedFormControl({ value: this.customer.streetAndNumber, disabled: true }, [
                Validators.required,
            ]),
            city: new UntypedFormControl({ value: this.customer.city, disabled: true }, [Validators.required]),
            zipCode: new UntypedFormControl({ value: this.customer.zipCode, disabled: true }, [Validators.required]),
            country: new UntypedFormControl({ value: this.customer.country, disabled: true }, [Validators.required]),
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
