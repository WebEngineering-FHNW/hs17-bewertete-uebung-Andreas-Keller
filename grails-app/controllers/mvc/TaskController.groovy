package mvc

import grails.rest.RestfulController
import groovy.transform.CompileStatic
import grails.converters.JSON

class TaskController extends RestfulController<Task>{

    //static scaffold = Task

    static responseFormats = ['json', 'xml']

    TaskController() {
        super(Task)
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
        def jsonrequest = request.JSON
        System.out.println(jsonrequest);
        def task = Task.findById(Integer.parseInt("3"));
        task.setStatus("DONE");
        task.save();
    }


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