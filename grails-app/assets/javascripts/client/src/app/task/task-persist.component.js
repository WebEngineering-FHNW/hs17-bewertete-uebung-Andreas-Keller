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
var router_1 = require("@angular/router");
var task_1 = require("./task");
var task_service_1 = require("./task.service");
var TaskPersistComponent = (function () {
    function TaskPersistComponent(route, taskService, router) {
        this.route = route;
        this.taskService = taskService;
        this.router = router;
        this.task = new task_1.Task();
        this.create = true;
    }
    TaskPersistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.taskService.get(+params['id']).subscribe(function (task) {
                    _this.create = false;
                    _this.task = task;
                });
            }
        });
    };
    TaskPersistComponent.prototype.save = function () {
        var _this = this;
        this.taskService.save(this.task).subscribe(function (task) {
            _this.router.navigate(['/task', 'show', task.id]);
        }, function (res) {
            var json = res.json();
            if (json.hasOwnProperty('message')) {
                _this.errors = [json];
            }
            else {
                _this.errors = json._embedded.errors;
            }
        });
    };
    TaskPersistComponent = __decorate([
        core_1.Component({
            selector: 'task-persist',
            templateUrl: './task-persist.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, task_service_1.TaskService, router_1.Router])
    ], TaskPersistComponent);
    return TaskPersistComponent;
}());
exports.TaskPersistComponent = TaskPersistComponent;
//# sourceMappingURL=task-persist.component.js.map