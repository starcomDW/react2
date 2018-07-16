package react.basic.one.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

// two merge1 test new version of git
// another change on merge one that will not have a conflict
@Controller
public class HomeController {
 
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
    
    @RequestMapping(value = "/o/{id}")
    public String index2(@PathVariable String id) {
        return "index" + id;
    }
    
    @RequestMapping(value = "/oo/{id}")
    public String index3(@PathVariable String id) {
        return "Innnnndex" + id;
    }
    
}
