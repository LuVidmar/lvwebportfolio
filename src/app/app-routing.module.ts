import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MainpageComponent } from './mainpage/mainpage.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { ImpossibleListComponent } from './impossible-list/impossible-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '404', component: Notfound404Component },
  { path: 'impossible-list', component: ImpossibleListComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }