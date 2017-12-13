package mvc

import grails.rest.RestfulController
import groovy.transform.CompileStatic
import grails.converters.JSON
import org.springframework.web.bind.annotation.RestController

class TaskController extends RestfulController<Task> {

    //static scaffold = Task

    static responseFormats = ['json', 'xml']

    TaskController() {
        super(Task)
    }

    def index(){
        overview();
    }

    def overview() {
        //def myLayout = "main"
        //def tasks = Task.findAll()
        def backlog = Task.findAllByStatus(Task.BACKLOG)
        def notstarted = Task.findAllByStatus(Task.NOTSTARTED)
        def inprogress = Task.findAllByStatus(Task.INPROGRESS)
        def done = Task.findAllByStatus(Task._DONE_)
        render view: "overview", model: [backlog: backlog, notstarted: notstarted, inprogress: inprogress, done: done]
    }

    def updateStatus(){
        //def jsonrequest = request.JSON
        //System.out.println(jsonrequest);

        int id = Integer.parseInt(params.id)
        Task task = Task.findById(id);
        String newStatus = params.newStatus;
        task.status = newStatus;

        task.save(flush:true, failOnError:true);

        /*
        def backlog = Task.findAllByStatus(Task.BACKLOG)
        def notstarted = Task.findAllByStatus(Task.NOTSTARTED)
        def inprogress = Task.findAllByStatus(Task.INPROGRESS)
        def done = Task.findAllByStatus(Task._DONE_)
        render view: "overview", model: [backlog: backlog, notstarted: notstarted, inprogress: inprogress, done: done]
        */
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
    /*
    static save(domainObject) {
        domainObject.save(failOnError: true)
    }
    */





    /*
    def show() {
        [task: Task.get(params.id)]
    }
    */
}
/*
class ProtrackModel implements Validateable {

    double en     = 0.0
    double exam   = 0.0
    String result = ""

    static constraints = {
        en   min:1d, max:6d, scale:1
        exam min:1d, max:6d, scale:1
        result nullable:true
    }

}
*/