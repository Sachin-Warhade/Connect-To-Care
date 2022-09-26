package com.cdac.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.cdac.project.entities.HealthTimeline;
import com.cdac.project.entities.Patient;
import com.cdac.project.repositories.HealthTimelineRepository;

@Service
public class HealthTimeLineService {

	@Autowired
	HealthTimelineRepository healthrepo;
	
	public HealthTimeline saveHealthTimeline(@RequestBody HealthTimeline dtt) {
		try {
			return healthrepo.save(dtt);
		} catch (Exception e) {
			return null;
		}
	}
	
	//fetch parameter by patient id
	public List<HealthTimeline> getHealthTimeline(Patient id) {
		return healthrepo.getHealthTimeline(id);
	}
	
	
	public HealthTimeline updateHealthTimeline(HealthTimeline h) {
		try {
			return healthrepo.save(h);
		} catch (Exception e) {
			return null;
		}
	}
}
