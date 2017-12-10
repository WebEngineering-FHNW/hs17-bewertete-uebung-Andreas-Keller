package mvc

import grails.rest.Resource


@Resource(uri='/test', readOnly = false, formats = ['json', 'xml'])
class Task {

    String description
    String status
    String title
    int id = hashCode()

    String toString() {
        return title + " " + description
    }

    static final BACKLOG = "Backlog"
    static final NOTSTARTED = "Not started"
    static final INPROGRESS = "In progress"
    static final _DONE_ = "Done"

    static constraints = {
        title nullable: false
        description nullable : true
        status inList: [BACKLOG, NOTSTARTED, INPROGRESS, _DONE_]
    }
}
