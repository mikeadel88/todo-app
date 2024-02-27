import { Routes } from '@angular/router';
import { TodoDetilesComponent } from './components/todo-detiles/todo-detiles.component';
import { ToDoComponent } from './components/to-do/to-do.component';

export const routes: Routes = [
    {path:"",redirectTo:"/todo",pathMatch:'full'},
    {path:"todo",component:ToDoComponent,title:"Todo"},
    {path:"todo/:id",component:TodoDetilesComponent,title:"TodoDetiles"}];
