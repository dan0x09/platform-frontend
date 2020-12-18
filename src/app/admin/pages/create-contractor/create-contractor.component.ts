import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { CreateCustomer } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-create-contractor',
  templateUrl: './create-contractor.component.html',
  styleUrls: ['./create-contractor.component.css']
})
export class CreateContractorComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  submit(data: CreateCustomer) {
    this.http.post<any>(this.config.getUrl('/contractor/'), data)
      .subscribe(console.log, console.error);
  }
}
