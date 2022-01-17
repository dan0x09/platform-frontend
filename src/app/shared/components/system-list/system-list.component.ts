import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer as any, System } from '../../types/interfaces';

@Component({
    selector: 'app-system-list',
    templateUrl: './system-list.component.html',
    styleUrls: ['./system-list.component.css'],
})
export class SystemListComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {}

    @Input() systems!: System[];

    @Output('onSelect') onSelect: EventEmitter<System> = new EventEmitter<System>();
    displayedColumns: string[] = ['name', 'version', 'invalidated'];
    dataSource: MatTableDataSource<System>;

    // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [25, 50, 100, 200];

    // MatPaginator Output
    pageEvent: PageEvent;
    @ViewChild(MatSort) sort: MatSort;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit(): void {
        this.dataSource = new MatTableDataSource<System>(this.systems);
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

    select(system: System) {
        this.onSelect.emit(system);
    }
}
