import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLines]'
})
export class LinesDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input('appLines') set render(lines: number) {
    console.log('rendering', lines);
    for (let i = 0; i < lines; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
