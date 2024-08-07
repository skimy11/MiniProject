package com.example.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class HomeController {
    @GetMapping("/")
    public String getMethodName() {
        return "된다구리!!";
    }
}
