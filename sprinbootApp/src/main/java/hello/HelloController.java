package hello;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    @RequestMapping("/")
    public String index() {
        return "I am a rest app! No really I am :)!";
    }

    @RequestMapping("/healthcheck")
    public String healthcheck() {
        return "I am a healthy rest app!";
    }

    @RequestMapping("/work")
    public String work() {
        return "I am a very working rest app!";
    }

}