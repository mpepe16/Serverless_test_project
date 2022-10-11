import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestButtonComponent } from './components/test-button/test-button.component';
import { TextAreaComponent } from './components/text-area/text-area.component';

@NgModule({
  declarations: [
    AppComponent,
    TestButtonComponent,
    TextAreaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
