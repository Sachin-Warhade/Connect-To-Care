package com.cdac.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entities.HealthTimeline;
import com.cdac.project.entities.Patient;
import com.cdac.project.services.HealthTimeLineService;
import com.cdac.project.services.PatientService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HealthTimelineController {

	@Autowired
	HealthTimeLineService hservice;
	
	@Autowired
	PatientService pservice;
	
	@PostMapping("/savehealthtimeline")
	public HealthTimeline saveHealthTimeline(@RequestBody HealthTimeline ht) {
		return hservice.saveHealthTimeline(ht);
	}
	
	@GetMapping("/healthtimelinebypatient/{id}")
	public List<HealthTimeline> getHealthTimeline(@PathVariable int id) {
		Patient p = pservice.getOneById(id);
		return hservice.getHealthTimeline(p);
	}
	
	@PostMapping("/updatehealthtimeline")
	public HealthTimeline updateHealthTimeline(@RequestBody HealthTimeline ht) {
		
		try {
			return hservice.updateHealthTimeline(ht);
		}
		catch(Exception e) {
			return null;
		}
	}
}
