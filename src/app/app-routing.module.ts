import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/user', pathMatch: 'full'
  },
  {path: 'user', component: UserDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}