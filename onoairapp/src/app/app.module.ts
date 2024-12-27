import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppComponent,
    MainScreenComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }