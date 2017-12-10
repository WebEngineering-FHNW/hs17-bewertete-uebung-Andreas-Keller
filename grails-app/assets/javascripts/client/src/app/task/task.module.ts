import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {TaskService} from './task.service';


import {TaskRoutingModule} from './task-routing.module';
import {TaskShowComponent} from './task-show.component';
import {TaskListComponent} from './task-list.component';
import {TaskPersistComponent} from './task-persist.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskPersistComponent,
    TaskShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule {}