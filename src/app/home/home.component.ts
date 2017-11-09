import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

// Components act as controllers. Templates are the views.
// Components are a type of directive.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add an Item';
  goalText: string = 'My first life goal';
  goals: string[]  = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

  removeItem(i: number) {
    this.goals.splice(i, 1);
  }

}
