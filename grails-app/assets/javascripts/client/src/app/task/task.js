"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = (function () {
    function Task(object) {
        if (object) {
            for (var prop in object) {
                this[prop] = object[prop];
            }
        }
    }
    Task.prototype.toString = function () {
        return 'mvc.Task : ' + (this.id ? this.id : '(unsaved)');
    };
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map