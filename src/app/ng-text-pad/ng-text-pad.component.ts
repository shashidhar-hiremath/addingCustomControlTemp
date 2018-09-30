import { Component, OnInit, ContentChild, TemplateRef,forwardRef} from '@angular/core';
import { TextPadDireactive } from '../app.direactive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'ng-text-pad',
  templateUrl: './ng-text-pad.component.html',
  styleUrls: ['./ng-text-pad.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgTextPadComponent),
    multi: true
}],
})
export class NgTextPadComponent implements OnInit, ControlValueAccessor {
  @ContentChild(TextPadDireactive, {read: TemplateRef}) optionalTemplate : TemplateRef<any>;
  private _onChange = (_: string) => { };
  private _onTouched = () => { };
  _counterValue:string="";
  get filterValue() {
    return this._counterValue;
  }
  
  set filterValue(val) {
    this._counterValue = val;
    this._onChange(val);
  }
  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.filterValue = value;
    }
  }

registerOnChange(fn: any): void {
    this._onChange = fn;
}

registerOnTouched(fn: any): void {
    this._onTouched = fn;
}
onChangeText(e:any){
  this.filterValue = e.target.value;
}
}
