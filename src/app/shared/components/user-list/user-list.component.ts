import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfigService } from 'src/app/services/config.service';
import { Role, User } from '../../types/interfaces';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements AfterViewInit {
    constructor() {}

    @Input() users!: User[];

    @Output('onSelect') onSelect: EventEmitter<User> = new EventEmitter<User>();

    displayedColumns: string[] = ['email', 'firstName', 'lastName', 'role'];
    dataSource: MatTableDataSource<User>;

    // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [25, 50, 100, 200];

    // MatPaginator Output
    pageEvent: PageEvent;
    @ViewChild(MatSort) sort: MatSort;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit(): void {
        this.dataSource = new MatTableDataSource<User>(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    select(user: User) {
        this.onSelect.emit(user);
    }

    prettyRole(role: Role): string {
        console.log(role);
        if (role === Role.OWNER) {
            return 'Owner';
        } else if (role === Role.ADMIN) {
            return 'Admin';
        } else if (role === Role.CONTRACTOR) {
            return 'Lohnunternehmer';
        } else {
            return 'Landwirt';
        }
    }
}
