import {Component, OnInit} from '@angular/core';
import {TaskService} from './task.service';
import {Task} from './task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  taskList: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.list().subscribe((taskList: Task[]) => {
      this.taskList = taskList;
    });
  }
}
