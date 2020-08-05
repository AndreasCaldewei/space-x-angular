import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DragonsIndexComponent} from './pages/dragons-index/dragons-index.component';
import {DragonsDetailComponent} from './pages/dragons-detail/dragons-detail.component';


const routes: Routes = [
  {path: 'dragons', component: DragonsIndexComponent},
  {path: 'dragons/:id', component: DragonsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
