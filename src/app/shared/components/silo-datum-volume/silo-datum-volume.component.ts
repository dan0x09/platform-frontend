import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SiloDatum, SiloDatumWithUrls } from '../../types/interfaces';

@Component({
  selector: 'app-silo-datum-volume',
  templateUrl: './silo-datum-volume.component.html',
  styleUrls: ['./silo-datum-volume.component.css']
})
export class SiloDatumVolumeComponent implements OnInit, AfterViewInit {
  
  constructor(
    ) { }
  
    @Input() data!: SiloDatumWithUrls;
  
    ngOnInit(): void {
    }
  
    ngAfterViewInit() {
    }
}
