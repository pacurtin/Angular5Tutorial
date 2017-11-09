import {Component, OnInit, ViewEncapsulation} from '@angular/core';

// Need this to do route parametrisation
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  // Not really sure what the point of this is? Why not just put routerLink="" straight into the html?
  sendMeHome() {
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
