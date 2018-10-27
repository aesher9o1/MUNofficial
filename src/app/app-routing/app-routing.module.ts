import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './../pages/landing/landing.component'
import { LandingContainerComponent } from './../components/landing-container/landing-container.component'
import {ChatBodyComponent} from './../pages/chat/chat-body/chat-body.component'




const routes: Routes = [
  {
    path: '',
    component: LandingContainerComponent,
    // children:[
    //   { path: '', component: LandingContainerComponent }
    // ]
  },{
    path: 'chat',
    component: ChatBodyComponent
  }
];




@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
export const routingComponents = [
  LandingComponent,
  LandingContainerComponent,
  ChatBodyComponent
]