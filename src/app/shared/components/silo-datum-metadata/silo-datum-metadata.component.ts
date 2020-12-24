import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { SiloDatum } from '../../types/interfaces';

@Component({
  selector: 'app-silo-datum-metadata',
  templateUrl: './silo-datum-metadata.component.html',
  styleUrls: ['./silo-datum-metadata.component.css']
})
export class SiloDatumMetadataComponent implements OnInit {

  constructor(
  ) { }

  @Input() siloDatum!: SiloDatum;

  ngOnInit(): void {
    
  }

}
