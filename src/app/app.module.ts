import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TextPadDireactive } from './app.direactive';
import { NgTextPadComponent } from './ng-text-pad/ng-text-pad.component';
@NgModule({
  declarations: [
    AppComponent,
    TextPadDireactive,
    NgTextPadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
