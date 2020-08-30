import { ItemsService } from './../../../shared/services/items.service';
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
              private route: ActivatedRoute,
              private itemService: ItemsService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.itemService.getData().subscribe((res) => {
      console.log(res);
    })
  }

  navigate() {
    console.log(this.route);
    this.router.navigate(['/forms']);
  }

}
