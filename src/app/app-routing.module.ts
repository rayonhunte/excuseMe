import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcuseComponent } from './excuse/excuse.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/excuseME', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'excuseME', component: ExcuseComponent },
  { path: '**', redirectTo: '/excuseME' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
