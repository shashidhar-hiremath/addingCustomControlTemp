import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector:"[ng-text-pad]"
})
export class TextPadDireactive {
    constructor(public template:TemplateRef<any>){}
}