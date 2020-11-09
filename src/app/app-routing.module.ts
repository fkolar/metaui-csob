import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerViewComponent} from './customer/customer-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/user', pathMatch: 'full'
  },
  {path: 'user', component: CustomerViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
