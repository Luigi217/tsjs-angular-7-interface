import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  logged = false;
  constructor() { }

  ngOnInit() {
  }

  test(u,p) {
    //this.logged = true;
    //console.log('test !' + u + ' ' + p);
    console.log('logged ? =' + localStorage.getItem('logged'));
    }

}
