import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostListener("click") onClicks() {
    this.highlight("highlight")
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.highlight("None")
  }
  private highlight(highlight: string){
    this.elem.nativeElement.style.backgroundColor = 'yellow';
  }
}
