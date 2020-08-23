import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit, OnDestroy {
  public user: {id, name};
  public route$: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route$ = this.route.params.subscribe(
      (params: Params) => {
        this.user = {
          id: params['id'],
          name: params['name']
        };
      }
    );
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name']
    // };
  }

  handle() {
    const id = this.route.snapshot.params;
    console.log(id);
  }

  navigate() {
    this.router.navigate(['items/objects', 99, 'ag'], {queryParams: {isDone: true}, fragment: 'frag'});
  }

  ngOnDestroy() {
    this.route$.unsubscribe();
  }

}
