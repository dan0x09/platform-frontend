import { Component, Input, OnInit } from '@angular/core';
import { SiloDatum } from '../../types/interfaces';

@Component({
  selector: 'app-silo-datum-volume',
  templateUrl: './silo-datum-volume.component.html',
  styleUrls: ['./silo-datum-volume.component.css']
})
export class SiloDatumVolumeComponent implements OnInit {
  
  constructor(
    ) { }
  
    @Input() siloDatum!: SiloDatum;
  
    ngOnInit(): void {
      
    }
  
}
