package mvc

import grails.util.Environment

class BootStrap {

    def init = { servletContext ->
        if (Environment.current == Environment.PRODUCTION) {
            return
        }

        Room windowRoom = save(new Room(name: "1.333", max: 32))
        Room cornerRoom = save(new Room(name: "1.331", max: 42))

        Person dierk = save(new Person(firstName: "Dierk", lastName: "König", email:"dierk.koenig@fhnw.ch"))

        Date today = new Date().clearTime();
        save(new Booking(booker: dierk, room: windowRoom, date: today - 1, slot: Booking.AM))
        save(new Booking(booker: dierk, room: windowRoom, date: today,     slot: Booking.AM))
        save(new Booking(booker: dierk, room: windowRoom, date: today + 1, slot: Booking.AM))
        save(new Booking(booker: dierk, room: cornerRoom, date: today ,    slot: Booking.AM))

        save new Task(title: "customer login", description: "add login for customers", status: Task.BACKLOG)
        save new Task(title: "CEO login", description: "add login for CEO", status: Task.BACKLOG)
        save new Task(title: "add Task", description: "must be able to add task", status: Task.INPROGRESS)
        save new Task(title: "remove Task", description: "must be able to remove task", status: Task.NOTSTARTED)
        save new Task(title: "developers login", description: "add login for developers", status: Task._DONE_)

    }

    static save(domainObject) {
        domainObject.save(failOnError: true)
    }

    def destroy = {
    }
}
