import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FirebaseModule, FirebaseProvider} from 'angular-firebase';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModule
  ],
  providers: [FirebaseProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
