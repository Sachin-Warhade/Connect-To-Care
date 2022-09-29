package com.cdac.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.project.entities.Doctor;
import com.cdac.project.entities.Patient;
import com.cdac.project.entities.Rating;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {

	@Query("select r from Rating r where doctor_id= :id")
	public List<Rating> getDoctorRating(Doctor id);
	
	@Query("select r from Rating r where patient_id = :pid")
	public List<Rating> getRatingByPatientId(Patient pid);
}
