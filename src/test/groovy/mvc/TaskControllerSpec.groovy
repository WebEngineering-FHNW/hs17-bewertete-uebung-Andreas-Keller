package mvc

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.web.ControllerUnitTestMixin} for usage instructions
 */
@TestFor(TaskController)
class TaskControllerSpec extends Specification {

    TaskController taskController;

    def setup() {
        taskController = new TaskController()
    }

    def cleanup() {
    }

    void "test overview method"() {
        when: taskController.overview()
        then: Task.findAllByStatus(Task.BACKLOG) == []
    }
}
