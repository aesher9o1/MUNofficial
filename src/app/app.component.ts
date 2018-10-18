import { Component } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgsRevealConfig]
})
export class AppComponent {
  title = 'app';
  constructor(config: NgsRevealConfig) {
    // customize default values of ng-scrollreveal directives used by this component tree
    config.duration = 5000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
  
  }
}
