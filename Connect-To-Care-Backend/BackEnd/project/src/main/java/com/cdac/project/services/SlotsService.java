package com.cdac.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.entities.Doctor;
import com.cdac.project.entities.Slots;
import com.cdac.project.repositories.SlotsRepository;

@Service
public class SlotsService {

	@Autowired
	SlotsRepository slotrepo;
	
	public Slots saveTimeTable(Slots slot) {
		try {
			return slotrepo.save(slot);
		} catch (Exception e) {
			return null;
		}
	}

	public List<Slots> getTimeTableByDoctorId(Doctor d) {

		return slotrepo.getTimeTableByDoctorId(d);
	}

	public Optional<Slots> getTimeTableById(int id) {
		//System.out.println(id);
		return slotrepo.findById(id);
	}
	
	public List<Slots> allDoctorTimeTable(){
		return slotrepo.findAll();
	}

	public Slots getAppointmentsByIdandDay(Doctor d, String day) {
		return slotrepo.getAppointmentByIdAndDay(d,day);

	}
}
