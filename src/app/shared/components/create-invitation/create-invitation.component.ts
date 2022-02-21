import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { Contractor, Farm, Role, UserInvitation } from '../../types/interfaces';

@Component({
    selector: 'app-create-invitation',
    templateUrl: './create-invitation.component.html',
    styleUrls: ['./create-invitation.component.css'],
})
export class CreateInvitationComponent implements OnInit {
    @Input() allowedRoles!: Role[];

    @Output() inviteEvent: EventEmitter<UserInvitation> = new EventEmitter<UserInvitation>();

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

    farmerOrganizationControlHidden = true;
    contractorOrganizationControlHidden = true;

    contractors: Contractor[];
    filteredContractors: Observable<Contractor[]>;

    farms: Farm[];
    filteredFarms: Observable<Farm[]>;

    constructor(private http: HttpClient, private config: ConfigService) {}

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
        this.http.get<Farm[]>(this.config.getUrl('/farm/')).subscribe({
            next: (farms: Farm[]) => {
                this.farms = farms;
                this.http.get<Contractor[]>(this.config.getUrl('/contractor/')).subscribe({
                    next: (contractors: Contractor[]) => {
                        this.contractors = contractors;
                    },
                    error: (e) => console.error(e),
                });
            },
            error: (e) => console.error(e),
        });
    }

    submit(): void {
        if (this.form.valid) {
            const formInput = this.form.value as {
                email: string;
                role: string;
                organizationId: number;
            };
            const role = this.form.get('role').value as string;
            switch (role) {
                case Role.ADMIN:
                    // send admin invitation
                    const adminInvitation: UserInvitation = {
                        email: formInput.email,
                        role: formInput.role,
                        organizationId: -1,
                    };
                    this.inviteEvent.emit(adminInvitation);
                    break;
                case Role.CONTRACTOR:
                    const contractorOrganizationControl = this.form.get('contractorOrganization');
                    if (contractorOrganizationControl.value || contractorOrganizationControl.value === 0) {
                        // send contractor invitation
                        const userInvitation: UserInvitation = {
                            email: formInput.email,
                            role: formInput.role,
                            organizationId: formInput.organizationId,
                        };
                        this.inviteEvent.emit(userInvitation);
                    } else {
                        contractorOrganizationControl.setErrors({ incorrect: true });
                    }
                    break;
                case Role.FARMER:
                default:
                    const farmerOrganizationControl = this.form.get('farmerOrganization');
                    if (farmerOrganizationControl.value || farmerOrganizationControl.value === 0) {
                        // send farmer invitation
                        const farmerInvitation: UserInvitation = {
                            email: formInput.email,
                            role: formInput.role,
                            organizationId: formInput.organizationId,
                        };
                        this.inviteEvent.emit(farmerInvitation);
                    } else {
                        farmerOrganizationControl.setErrors({ incorrect: true });
                    }
                    break;
            }
        }
    }
}
