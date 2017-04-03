import {Component, Input, OnInit} from '@angular/core';
import {Kweet} from '../kweet';

@Component({
  selector: 'app-alernate-kweet',
  templateUrl: './alernate-kweet.component.html',
  styleUrls: ['./alernate-kweet.component.css']
})
export class AlernateKweetComponent implements OnInit {
  @Input() kweet: Kweet;

  constructor() { }

  ngOnInit() {
  }

}
