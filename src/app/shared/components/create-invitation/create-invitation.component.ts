import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { Contractor, Farmer, Role, User, UserInvitation } from '../../types/interfaces';

@Component({
    selector: 'app-create-invitation',
    templateUrl: './create-invitation.component.html',
    styleUrls: ['./create-invitation.component.css'],
})
export class CreateInvitationComponent implements OnInit {
    constructor(private http: HttpClient, private config: ConfigService) {}

    @Input('allowedRoles') allowedRoles!: Role[];

    @Output('onInvite') onInvite: EventEmitter<UserInvitation> = new EventEmitter<UserInvitation>();

    baseRoles: { id: Role; viewValue: string }[] = [
        {
            id: Role.ADMIN,
            viewValue: 'Admin',
        },
        {
            id: Role.CONTRACTOR,
            viewValue: 'Lohnunternehmer',
        },
        {
            id: Role.FARMER,
            viewValue: 'Landwirt',
        },
    ];

    roles: { id: Role; viewValue: string }[];

    form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        role: new FormControl({ value: Role.FARMER }, [Validators.required]),
        contractorOrganization: new FormControl({ value: null, disabled: false }, []),
        farmerOrganization: new FormControl({ value: null, disabled: false }, []),
    });

    farmerOrganizationControlHidden: boolean = true;
    contractorOrganizationControlHidden: boolean = true;

    contractors: Contractor[];
    filteredContractors: Observable<Contractor[]>;

    farmers: Farmer[];
    filteredFarmers: Observable<Farmer[]>;

    ngOnInit(): void {
        this.roles = this.baseRoles.filter((role: { id: Role; viewValue: string }) =>
            this.allowedRoles.includes(role.id)
        );
        this.form.get('role').valueChanges.subscribe((role: Role) => {
            this.form.setErrors(null);
            if (role === Role.ADMIN) {
                this.contractorOrganizationControlHidden = true;
                this.farmerOrganizationControlHidden = true;
            } else if (role === Role.CONTRACTOR) {
                this.contractorOrganizationControlHidden = false;
                this.farmerOrganizationControlHidden = true;
            } else {
                this.contractorOrganizationControlHidden = true;
                this.farmerOrganizationControlHidden = false;
            }
        });
        this.http.get<Farmer[]>(this.config.getUrl('/farmer/')).subscribe((farmers: Farmer[]) => {
            this.farmers = farmers;
            this.http.get<Contractor[]>(this.config.getUrl('/contractor/')).subscribe((contractors: Contractor[]) => {
                this.contractors = contractors;
            }, console.error);
        }, console.error);
    }

    submit() {
        if (this.form.valid) {
            const role = this.form.get('role').value;
            switch (role) {
                case Role.ADMIN:
                    // send admin invitation
                    const data: UserInvitation = {
                        email: this.form.value.email,
                        role: this.form.value.role,
                        organizationId: -1,
                    };
                    this.onInvite.emit(data);
                    break;
                case Role.CONTRACTOR:
                    const contractorOrganizationControl = this.form.get('contractorOrganization');
                    if (contractorOrganizationControl.value || contractorOrganizationControl.value === 0) {
                        // send contractor invitation
                        const data: UserInvitation = {
                            email: this.form.value.email,
                            role: this.form.value.role,
                            organizationId: this.form.value.contractorOrganization,
                        };
                        this.onInvite.emit(data);
                    } else contractorOrganizationControl.setErrors({ incorrect: true });
                    break;
                case Role.FARMER:
                default:
                    const farmerOrganizationControl = this.form.get('farmerOrganization');
                    if (farmerOrganizationControl.value || farmerOrganizationControl.value === 0) {
                        // send farmer invitation
                        const data: UserInvitation = {
                            email: this.form.value.email,
                            role: this.form.value.role,
                            organizationId: this.form.value.farmerOrganization,
                        };
                        this.onInvite.emit(data);
                    } else farmerOrganizationControl.setErrors({ incorrect: true });
                    break;
            }
        }
    }
}
