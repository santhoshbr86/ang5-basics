import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHeighlight]'
})
export class HeighlightDirective {
  @Input('appHeighlight') appHeighlightColor : string;
  @Input() defaultColor : string;
  constructor(private el:ElementRef) {
 //   this.el.nativeElement.style.backgroundColor='green';
  }
  heightLight(color: String){
    this.el.nativeElement.style.color=color;
  }
  @HostListener('mouseenter') onMouse() {
    this.heightLight(this.appHeighlightColor|| this.defaultColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.heightLight(null);
  }
  
}
