import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CreateCustomer } from '../../types/interfaces';

@Component({
    selector: 'app-create-customer',
    templateUrl: './create-customer.component.html',
    styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
    @Output() submitEvent: EventEmitter<CreateCustomer> = new EventEmitter<CreateCustomer>();

    createForm: UntypedFormGroup = new UntypedFormGroup({
        name: new UntypedFormControl('', [Validators.required]),
        streetAndNumber: new UntypedFormControl('', [Validators.required]),
        city: new UntypedFormControl('', [Validators.required]),
        zipCode: new UntypedFormControl('', [Validators.required]),
        country: new UntypedFormControl('', [Validators.required]),
    });

    constructor() {}

    ngOnInit(): void {}

    submit(): void {
        if (this.createForm.valid) {
            this.submitEvent.emit(this.createForm.value as CreateCustomer);
        }
    }
}
