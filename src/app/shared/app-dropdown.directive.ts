import { Directive , HostListener , HostBinding } from '@angular/core';

@Directive({
  selector: '[appAppDropdown]'
})
export class AppDropdownDirective {

     @HostBinding('class.open') isOpen = false ;

	@HostListener('click') toggleOpen(){
       this.isOpen = !this.isOpen ;
	}

  constructor() { }

}
