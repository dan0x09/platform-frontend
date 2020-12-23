import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  @Input() title!: string;

  ngOnInit(): void {
  }

  logout() {
    this.auth.deleteToken();
    this.router.navigate(['']);
  }

}
