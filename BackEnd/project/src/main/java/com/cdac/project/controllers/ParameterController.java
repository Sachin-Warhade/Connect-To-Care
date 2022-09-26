package com.cdac.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entities.Parameter;
import com.cdac.project.entities.Patient;
import com.cdac.project.services.ParameterService;
import com.cdac.project.services.PatientService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ParameterController {

	@Autowired
	ParameterService paraservice;
	
	@Autowired
	PatientService pservice;
	
	@PostMapping("/saveparameter")
	public Parameter saveHealthTimeline(@RequestBody Parameter ht) {
		return paraservice.saveParameter(ht);
	}
	
	@GetMapping("/parameterbypatient/{id}")
	public Parameter getParameter(@PathVariable int id) {
		Patient p = pservice.getOneById(id);
		return paraservice.getParameter(p);
	}
	
	@PostMapping("/updateparameter")
	public Parameter updateParameter(@RequestBody Parameter pt) {
		
		try {
			return paraservice.updateParameter(pt);
		}
		catch(Exception e) {
			return null;
		}
	}
}
