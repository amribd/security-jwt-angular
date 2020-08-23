import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  navigate() {
    console.log(this.route);
    this.router.navigate(['/forms']);
  }

}
