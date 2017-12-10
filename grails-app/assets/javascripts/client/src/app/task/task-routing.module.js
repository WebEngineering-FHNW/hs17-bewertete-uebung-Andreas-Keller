"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var task_list_component_1 = require("./task-list.component");
var task_persist_component_1 = require("./task-persist.component");
var task_show_component_1 = require("./task-show.component");
var routes = [
    { path: 'task', redirectTo: 'task/list', pathMatch: 'full' },
    { path: 'task/list', component: task_list_component_1.TaskListComponent },
    { path: 'task/create', component: task_persist_component_1.TaskPersistComponent },
    { path: 'task/edit/:id', component: task_persist_component_1.TaskPersistComponent },
    { path: 'task/show/:id', component: task_show_component_1.TaskShowComponent },
];
var TaskRoutingModule = (function () {
    function TaskRoutingModule() {
    }
    TaskRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TaskRoutingModule);
    return TaskRoutingModule;
}());
exports.TaskRoutingModule = TaskRoutingModule;
//# sourceMappingURL=task-routing.module.js.map