package com.cdac.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.project.entities.HealthTimeline;
import com.cdac.project.entities.Patient;

@Repository
public interface HealthTimelineRepository extends JpaRepository<HealthTimeline, Integer> {

	@Query("select h from HealthTimeline h where patient_id = :id")
	public List<HealthTimeline> getHealthTimeline(Patient id); 
	
	
}
