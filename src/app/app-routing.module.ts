import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/components/login/login.component';
import { TodoPageComponent } from './todo/components/todo-page/todo-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
