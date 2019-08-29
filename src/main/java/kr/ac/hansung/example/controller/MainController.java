package kr.ac.hansung.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    public String getMain() {
        return "index";
    }

    @RequestMapping("/events")
    public String getEvent() {
        return "events";
    }
}
