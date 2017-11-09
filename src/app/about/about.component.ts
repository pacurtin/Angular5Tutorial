import {Component, OnInit, ViewEncapsulation} from '@angular/core';

// Need this to do route parametrisation
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AboutComponent implements OnInit {
  goals: any;

  // We have to pass services to components via the constructor
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    // Subscribe keyword looks important...
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    // Class variables are this._data?
    this._data.goal.subscribe(res => this.goals = res);
  }

  // Not really sure what the point of this is? Why not just put routerLink="" straight into the html?
  sendMeHome() {
    this.router.navigate(['']);
  }

}
