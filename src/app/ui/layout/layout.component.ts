import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public mediaSM: boolean;
  public mediaSub: Subscription;
  public sidebarOpened: boolean = true;

  constructor(private mediaObserver: MediaObserver) { }

  ngOnInit() {
    // console.log(this.mediaObserver);
    this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        change.mqAlias === 'sm' ? this.sidebarOpened = false: this.sidebarOpened = true;
        console.log(change);
        console.log(this.mediaSM);
      } 
    )
  }

}
