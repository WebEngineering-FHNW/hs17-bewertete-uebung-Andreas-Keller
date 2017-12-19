package mvc

import com.gargoylesoftware.htmlunit.WebClient
import com.gargoylesoftware.htmlunit.html.HtmlPage
import geb.spock.GebSpec
import grails.test.mixin.integration.Integration
import javafx.scene.web.WebEngine
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.context.SpringBootTest

// This test is not working because the JS Engine does not have the methods
// used for the drag and drop methods applied in this application
@Integration
class ProTrackSpec extends GebSpec{

    @Value('${local.server.port}')
    Integer serverPort

    void "test of redirection from index to overview page"(){
        given:  java.util.logging.Logger.getLogger("net.sourceforge").setLevel(java.util.logging.Level.OFF)
                WebClient wc = new WebClient();
        when:   HtmlPage page = wc.getPage("http://localhost:${serverPort}/task/index")
        then:   page.getTitleText() == "Protrack"

    }
}
