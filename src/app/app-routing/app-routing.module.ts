import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './../pages/landing/landing.component'
import { LandingContainerComponent } from './../components/landing-container/landing-container.component'





const routes: Routes = [
  {
      path: '',
      component: LandingContainerComponent,
      // children:[
      //   { path: '', component: LandingContainerComponent }
      // ]
  },
];




@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
export const routingComponents = [
  LandingComponent,
  LandingContainerComponent
]