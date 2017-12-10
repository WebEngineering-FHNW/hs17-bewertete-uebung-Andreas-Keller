import core = require("core-js");

export class Task {
  id: number;

  title: string;
  description: string;
  status: string;

  constructor (object?: any) {
    if (object) {
      
      for (var prop in object) {
        this[prop] = object[prop];
      }
    }

  }

  toString(): string {
    return 'mvc.Task : ' + (this.id ? this.id : '(unsaved)');
  }
}