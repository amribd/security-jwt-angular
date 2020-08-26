import { Directive, ElementRef, OnInit, Renderer, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() backgroungColor: string;
  @Input() Color: string;

  constructor(
              private elementRef: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = "green";
      // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }

  @HostBinding('style.backgroundColor') 
  background: string;
  @HostBinding('style.color')
  color: string;

  @HostListener('mouseenter')
  mouseenter() {
    this.background = this.backgroungColor;
    this.color = this.Color;
    }

  // @HostListener('mouseleave')
  // mouseleave() {
  //   this.background = this.backgroungColor;
  //   }
}
