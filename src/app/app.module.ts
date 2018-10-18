import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { LandingComponent } from './pages/landing/landing.component';
import { LandingNewsComponent } from './components/landing-news/landing-news.component';
import { LandingContainerComponent } from './components/landing-container/landing-container.component';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import {MatCardModule} from '@angular/material/card';
import { LandingMunComponent } from './components/landing-mun/landing-mun.component';
import { LandingToolkitComponent } from './components/landing-toolkit/landing-toolkit.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { OptionsComponent } from './extras/options/options.component';
import { NgsRevealModule } from 'ngx-scrollreveal';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingNewsComponent,
    LandingContainerComponent,
    routingComponents,
    LandingMunComponent,
    LandingToolkitComponent,
    FooterComponent,
    OptionsComponent
  ],
  imports: [
    NgsRevealModule,
    MatBottomSheetModule,
    MatCardModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    AngularSvgIconModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  entryComponents:[ OptionsComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
