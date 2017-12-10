import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Task} from './task';
import {TaskService} from './task.service';
import {Response} from "@angular/http";


@Component({
  selector: 'task-persist',
  templateUrl: './task-persist.component.html'
})
export class TaskPersistComponent implements OnInit {

  task = new Task();
  create = true;
  errors: any[];
  

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    
    this.route.params.subscribe((params: Params) => {
      if (params.hasOwnProperty('id')) {
        this.taskService.get(+params['id']).subscribe((task: Task) => {
          this.create = false;
          this.task = task;
        });
      }
    });
  }

  save() {
    this.taskService.save(this.task).subscribe((task: Task) => {
      this.router.navigate(['/task', 'show', task.id]);
    }, (res: Response) => {
      const json = res.json();
      if (json.hasOwnProperty('message')) {
        this.errors = [json];
      } else {
        this.errors = json._embedded.errors;
      }
    });
  }
}
