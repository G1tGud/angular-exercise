import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen: boolean = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event']) onDropdownClick(eventData: Event) {
    this.isOpen = this.elRef.nativeElement.contains(eventData.target) ? !this.isOpen : false;
  }

}
