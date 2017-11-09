import {Component, OnInit, ViewEncapsulation} from '@angular/core';

// Components act as controllers. Templates are the views.
// Components are a type of directive.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add an Item';
  goalText: string = 'My first life goal';

  constructor() { }

  ngOnInit() {
  }

}
