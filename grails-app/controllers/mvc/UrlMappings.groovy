package mvc

class UrlMappings {

    static mappings = {
        // "/rooms"(resources: "room")
        "/$controller/$action?/$id?(.$format)?" {
            constraints {
                // apply constraints here
            }
        }
        "/"(view: "/index")
        "500"(view: '/error')
        "404"(view: '/notFound')

        //from http://guides.grails.org/rest-hibernate/guide/index.html
        delete "/$controller/$id(.$format)?"(action: 'delete')
        get "/$controller(.$format)?"(action: 'index')
        get "/$controller/$id(.$format)?"(action: 'show')
        post "/$controller(.$format)?"(action: 'save')
        put "/$controller/$id(.$format)?"(action: 'update')
        patch "/$controller/$id(.$format)?"(action: 'patch')
    }
}