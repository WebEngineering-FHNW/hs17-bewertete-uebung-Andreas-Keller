import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, RequestMethod, Request, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Task} from './task';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import "rxjs/add/operator/map";

@Injectable()
export class TaskService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: Http) {
  }

  list(): Observable<Task[]> {
    let subject = new Subject<Task[]>();
    this.http.get(this.baseUrl + 'task')
      .map((r: Response) => r.json())
      .subscribe((json: any[]) => {
        subject.next(json.map((item: any) => new Task(item)))
      });
    return subject.asObservable();
  }

  get(id: number): Observable<Task> {
    return this.http.get(this.baseUrl + 'task/'+id)
      .map((r: Response) => new Task(r.json()));
  }

  save(task: Task): Observable<Task> {
    const requestOptions = new RequestOptions();
    if (task.id) {
      requestOptions.method = RequestMethod.Put;
      requestOptions.url = this.baseUrl + 'task/' + task.id;
    } else {
      requestOptions.method = RequestMethod.Post;
      requestOptions.url = this.baseUrl + 'task';
    }
    requestOptions.body = JSON.stringify(task);
    requestOptions.headers = new Headers({"Content-Type": "application/json"});

    return this.http.request(new Request(requestOptions))
      .map((r: Response) => new Task(r.json()));
  }

  destroy(task: Task): Observable<boolean> {
    return this.http.delete(this.baseUrl + 'task/' + task.id).map((res: Response) => res.ok).catch(() => {
      return Observable.of(false);
    });
  }
}