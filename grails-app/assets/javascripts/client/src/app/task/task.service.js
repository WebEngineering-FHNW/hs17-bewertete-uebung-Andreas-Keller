"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var task_1 = require("./task");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/';
    }
    TaskService.prototype.list = function () {
        var subject = new Subject_1.Subject();
        this.http.get(this.baseUrl + 'task')
            .map(function (r) { return r.json(); })
            .subscribe(function (json) {
            subject.next(json.map(function (item) { return new task_1.Task(item); }));
        });
        return subject.asObservable();
    };
    TaskService.prototype.get = function (id) {
        return this.http.get(this.baseUrl + 'task/' + id)
            .map(function (r) { return new task_1.Task(r.json()); });
    };
    TaskService.prototype.save = function (task) {
        var requestOptions = new http_1.RequestOptions();
        if (task.id) {
            requestOptions.method = http_1.RequestMethod.Put;
            requestOptions.url = this.baseUrl + 'task/' + task.id;
        }
        else {
            requestOptions.method = http_1.RequestMethod.Post;
            requestOptions.url = this.baseUrl + 'task';
        }
        requestOptions.body = JSON.stringify(task);
        requestOptions.headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.request(new http_1.Request(requestOptions))
            .map(function (r) { return new task_1.Task(r.json()); });
    };
    TaskService.prototype.destroy = function (task) {
        return this.http.delete(this.baseUrl + 'task/' + task.id).map(function (res) { return res.ok; }).catch(function () {
            return Observable_1.Observable.of(false);
        });
    };
    TaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map