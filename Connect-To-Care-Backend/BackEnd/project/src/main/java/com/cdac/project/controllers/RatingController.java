package com.cdac.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entities.Doctor;
import com.cdac.project.entities.Patient;
import com.cdac.project.entities.Rating;
import com.cdac.project.services.DoctorService;
import com.cdac.project.services.PatientService;
import com.cdac.project.services.RatingService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RatingController {

	@Autowired
	RatingService ratservice;
	
	@Autowired
	DoctorService dservice;
	
	@Autowired
	PatientService pservice;
	
	@PostMapping("/saverating")
	public Rating saveRating(@RequestBody Rating r) {
		//System.out.println(a.getAreaName()+""+a.getCity_id());
		return ratservice.saveRating(r);
	}
	
	@GetMapping("/getratingbydoctorid/{id}")
	public List<Rating> getDoctorRating(@PathVariable int id) {
		Doctor d = dservice.getOneById(id);
		return ratservice.getDoctorRating(d);
	}
	
	@GetMapping("/getratingbypatientid/{id}")
	public List<Rating> getRatingByPatientId(@PathVariable int id) {
		Patient p = pservice.getOneById(id);
		return ratservice.getRatingByPatientId(p);
	}
	
	@GetMapping("/allrating")
	public List<Rating> getAllRating() {
		return ratservice.getAllRating();
	}
	
	@GetMapping("/averagerating/{id}")
	public Double averageDoctorRating(@PathVariable int id) {
		Doctor d = dservice.getOneById(id);
		return ratservice.averageDoctorRating(d);
	}
}
