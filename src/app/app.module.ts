import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule} from '@angular/core';

import { AppComponent } from './app.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaDetailsComponent } from './idea-details/idea-details.component';
import { HighlightDirective } from './highlight.directive';
import { IdeaFormComponent } from './idea-form/idea-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    IdeaDetailsComponent,
    HighlightDirective,
    IdeaFormComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
