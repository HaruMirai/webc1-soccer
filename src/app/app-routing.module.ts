import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ScoringComponent } from './scoring/scoring.component';
import { StandingComponent } from './standing/standing.component';

const routes: Routes = [
  {path:'standing', component:StandingComponent},
  {path:'scoring', component:ScoringComponent},
  {path:'admin', component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
