import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public authservice: AuthService) { }

  jwtHelper = new  JwtHelperService();

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.authservice.decodedToken = this.jwtHelper.decodeToken(token);
  }

}
