package com.springreact.dynamicreport.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 */
@RestController
public class TestController {

  @RequestMapping(value = "/rest", method = RequestMethod.GET)
  @CrossOrigin(origins = "*") //TODO change me!
  public String pong() {
    return "pong 123";
  }
}