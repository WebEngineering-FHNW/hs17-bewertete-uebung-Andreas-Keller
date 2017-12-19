package mvc

import grails.rest.RestfulController

class TaskController extends RestfulController<Task> {

    static responseFormats = ['json', 'xml']

    TaskController() {
        super(Task)
    }

    def index(){
        overview();
    }

    def overview() {
        def backlog = Task.findAllByStatus(Task.BACKLOG)
        def notstarted = Task.findAllByStatus(Task.NOTSTARTED)
        def inprogress = Task.findAllByStatus(Task.INPROGRESS)
        def done = Task.findAllByStatus(Task._DONE_)
        render view: "overview", model: [backlog: backlog, notstarted: notstarted, inprogress: inprogress, done: done]
    }

    def updateStatus(){
        int id = Integer.parseInt(params.id)
        Task task = Task.findById(id);
        String newStatus = params.newStatus;
        task.status = newStatus;
        task.save(flush:true, failOnError:true);
    }

    def addTask(){
        def newTask = new Task(params);
        newTask.save(flush:true, failOnError:true);
    }

    def deleteTask(){
        int id = Integer.parseInt(params.id);
        Task task = Task.findById(id);
        task.delete(flush: true, failOnError: true);

        def backlog = Task.findAllByStatus(Task.BACKLOG)
        def notstarted = Task.findAllByStatus(Task.NOTSTARTED)
        def inprogress = Task.findAllByStatus(Task.INPROGRESS)
        def done = Task.findAllByStatus(Task._DONE_)
        render view: "overview", model: [backlog: backlog, notstarted: notstarted, inprogress: inprogress, done: done]
    }

    def delete(){
        redirect(controller: 'task', action: 'overview')
    }

    def show(){
        redirect(controller: 'task', action: 'overview')
    }
}