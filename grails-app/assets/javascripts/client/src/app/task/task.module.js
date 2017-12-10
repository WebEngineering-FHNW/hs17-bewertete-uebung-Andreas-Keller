"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var task_service_1 = require("./task.service");
var task_routing_module_1 = require("./task-routing.module");
var task_show_component_1 = require("./task-show.component");
var task_list_component_1 = require("./task-list.component");
var task_persist_component_1 = require("./task-persist.component");
var TaskModule = (function () {
    function TaskModule() {
    }
    TaskModule = __decorate([
        core_1.NgModule({
            declarations: [
                task_list_component_1.TaskListComponent,
                task_persist_component_1.TaskPersistComponent,
                task_show_component_1.TaskShowComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                task_routing_module_1.TaskRoutingModule
            ],
            providers: [
                task_service_1.TaskService
            ]
        })
    ], TaskModule);
    return TaskModule;
}());
exports.TaskModule = TaskModule;
//# sourceMappingURL=task.module.js.map