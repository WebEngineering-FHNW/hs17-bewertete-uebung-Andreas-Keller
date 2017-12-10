import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Task} from './task';
import {TaskService} from './task.service';

@Component({
  selector: 'task-persist',
  templateUrl: './task-show.component.html'
})
export class TaskShowComponent implements OnInit {

  task = new Task();

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.taskService.get(+params['id']).subscribe((task: Task) => {
        this.task = task;
      });
    });
  }

  destroy() {
    if (confirm("Are you sure?")) {
      this.taskService.destroy(this.task).subscribe((success: boolean) => {
        if (success) {
          this.router.navigate(['/task','list']);
        } else {
          alert("Error occurred during delete");
        }
      });
    }
  }

}
