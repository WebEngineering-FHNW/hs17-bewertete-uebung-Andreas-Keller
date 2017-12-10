import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {TaskListComponent} from './task-list.component';
import {TaskPersistComponent} from './task-persist.component';
import {TaskShowComponent} from './task-show.component';

const routes: Routes = [
  {path: 'task', redirectTo: 'task/list', pathMatch: 'full'},
  {path: 'task/list', component: TaskListComponent},
  {path: 'task/create', component: TaskPersistComponent},
  {path: 'task/edit/:id', component: TaskPersistComponent},
  {path: 'task/show/:id', component: TaskShowComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}