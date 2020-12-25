import { Component, Input, OnInit } from '@angular/core';
import { SiloDatum } from '../../types/interfaces';

@Component({
  selector: 'app-silo-datum-feed',
  templateUrl: './silo-datum-feed.component.html',
  styleUrls: ['./silo-datum-feed.component.css']
})
export class SiloDatumFeedComponent implements OnInit {

  constructor(
    ) { }
  
    @Input() siloDatum!: SiloDatum;
  
    ngOnInit(): void {
      
    }
}
