package com.cdac.project.services;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.entities.Doctor;
import com.cdac.project.entities.Patient;
import com.cdac.project.entities.Rating;
import com.cdac.project.repositories.RatingRepository;

@Service
public class RatingService {

	@Autowired
	RatingRepository ratrepo;
	
	public Rating saveRating(Rating r) {
		try {
			return ratrepo.save(r);
		} catch (Exception e) {
			return null;
		}
	}
	
	public List<Rating> getDoctorRating(Doctor id) {
		return ratrepo.getDoctorRating(id);
	}
	
	public List<Rating> getRatingByPatientId(Patient pid) {
		return ratrepo.getRatingByPatientId(pid);
	}
	
	public List<Rating> getAllRating() {
		return ratrepo.findAll();
	}
	
	public Double averageDoctorRating(Doctor id) {
		List<Rating> lrating = ratrepo.getDoctorRating(id);
		
		Stream<Rating> notNullObjs =
				  lrating.stream().filter(obj -> obj.getStars() != 0);

		Double sum = notNullObjs.mapToDouble(Rating::getStars).sum();
		
		Double average = sum/lrating.size();
		
		return average;
	}
}
