import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(username, password) {
    if (username === 'esme' && password === 'esme') {
      localStorage.setItem('logged', String(true));
    } else {

    }
    console.log('logged ? =' + localStorage.getItem('logged'));
  }

}
