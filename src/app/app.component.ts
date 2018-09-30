import { 
  Component, 
  ContentChild,
  TemplateRef 
} from '@angular/core';
import { TextPadDireactive } from './app.direactive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newpro11';
  txtpad: string="";
}
