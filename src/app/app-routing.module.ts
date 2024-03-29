import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {ProjectComponent} from './project/project.component';
import {TaskComponent} from './task/task.component';
import {ViewTaskComponent} from './view-task/view-task.component';
import {UpdateTaskComponent} from './update-task/update-task.component';



const routes: Routes = [    
  {path: 'user', component:UserComponent},  
  {path: 'project', component:ProjectComponent},
  {path: 'task', component:TaskComponent},
  {path: 'view-task', component:ViewTaskComponent},
  {path: 'update-task', component:UpdateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

