package kr.ac.hansung.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
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

    @RequestMapping("/models")
    public String getModels() {return "models";}

    @PostMapping("/models")
    public String getModel() { return "models";}

    @RequestMapping("/collections")
    public String getCollection() {
        return "collections";
    }

    @RequestMapping("/router")
    public String getRouter() {
        return "routers";
    }

    @RequestMapping("/views")
    public String getView() {
        return "views";
    }
}