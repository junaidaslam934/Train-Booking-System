import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchtrainComponent } from './components/partials/searchtrain/searchtrain.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
