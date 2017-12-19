package mvc

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(Task)
class TaskSpec extends Specification {

    Task task;

    def setup() {
        task = new Task();
    }

    def cleanup() {
    }

    void "test toString method"() {
        given:
            task.title = "Test";
            task.description = "is successful"
        expect:"toString is working"
            task.toString() == "Test is successful"

    }
}
