import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscribeUnsubscribeComponent } from './subscribe-unsubscribe/subscribe-unsubscribe.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'subscribe-unsubscribe',
  component: SubscribeUnsubscribeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
