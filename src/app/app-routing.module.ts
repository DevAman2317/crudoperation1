import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngListComponent } from './eng-list/eng-list.component';
import { EngRegistrationComponent } from './eng-registration/eng-registration.component';
import { UpdateEngComponent } from './update-eng/update-eng.component';

const routes: Routes = [
{
  path:'list', component:EngListComponent
},
{
  path:'registration', component:EngRegistrationComponent
},
{
  path:'update/:id', component:UpdateEngComponent
}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
