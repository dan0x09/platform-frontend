import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { Invitation, Role } from '../../types/interfaces';

@Component({
    selector: 'app-invitation-list',
    templateUrl: './invitation-list.component.html',
    styleUrls: ['./invitation-list.component.css'],
})
export class InvitationListComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    @Input() invitations!: Invitation[];
    @Output() selectEvent: EventEmitter<Invitation> = new EventEmitter<Invitation>();

    now: Date = new Date();

    displayedColumns: string[] = ['userId', 'email', 'role', 'expiresAt', 'status'];
    dataSource: MatTableDataSource<Invitation>;

    // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [25, 50, 100, 200];

    // MatPaginator Output
    pageEvent: PageEvent;

    constructor(private router: Router, private http: HttpClient, private config: ConfigService) {}
    ngOnInit(): void {
        this.invitations.sort(this.sortByDate);
        this.dataSource = new MatTableDataSource<Invitation>(this.invitations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    select(invitation: Invitation): void {
        this.selectEvent.emit(invitation);
    }

    roleToString(role: Role): string {
        if (role === Role.OWNER) {
            return 'Owner';
        } else if (role === Role.ADMIN) {
            return 'Admin';
        } else if (role === Role.CONTRACTOR) {
            return 'Lohnunternehmer';
        }
        return 'Landwirt';
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        if (date > this.now) {
            return date.toLocaleString();
        } else {
            return `Abgelaufen am ${date.toLocaleString()}`;
        }
    }

    isInvitationExpired(dateString: string): boolean {
        const date = new Date(dateString);
        return date < this.now;
    }

    getInvitationStatus(invitation: Invitation): string {
        if (invitation.accepted) {
            return 'Angenommen';
        } else if (invitation.invalidated) {
            return 'Invalidiert';
        } else if (this.isInvitationExpired(invitation.expiresAt as unknown as string)) {
            return 'Abgelaufen';
        } else {
            return 'Ausstehend';
        }
    }

    visitUser(invitation: Invitation): void {
        this.router.navigate([`admin/edit-user/${invitation.userId}`]);
    }

    invalidate(element: Invitation): void {
        this.http
            .post<Invitation>(this.config.getUrl(`/invitation/user/${element.invitationId}/invalidate`), {})
            .subscribe({
                next: (invitation: Invitation) => {
                    const newList = this.dataSource.data.filter((x) => x.invitationId !== element.invitationId);
                    newList.push(invitation);
                    newList.sort(this.sortByDate);
                    this.dataSource.data = newList;
                },
                error: (e) => console.error(e),
            });
    }

    sortByDate(a: Invitation, b: Invitation, ascendingOrder = false): number {
        const aDate = new Date(a.expiresAt);
        const bDate = new Date(b.expiresAt);

        if ((aDate < bDate && ascendingOrder) || (aDate > bDate && !ascendingOrder)) {
            return -1;
        } else if ((aDate > bDate && ascendingOrder) || (aDate < bDate && !ascendingOrder)) {
            return 1;
        } else {
            return 0;
        }
    }
}
