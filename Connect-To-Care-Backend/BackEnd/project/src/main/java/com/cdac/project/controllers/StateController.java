package com.cdac.project.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entities.State;
import com.cdac.project.services.StateService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StateController {

	@Autowired
	StateService sservice;
	
	@GetMapping("/statebyid/{id}")
	public State getStateById(@PathVariable int id) {
		return sservice.getById(id);
	}
	
	@GetMapping("/allstates")
	public List<State> allStates(){
		return sservice.allStates();
	}
	
	@PostMapping("/savestate")
	public State saveState(@RequestBody State s) {
		return sservice.saveState(s);
	}
}
