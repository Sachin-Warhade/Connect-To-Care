package com.cdac.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.project.entities.Doctor;
import com.cdac.project.entities.Slots;

@Repository
public interface SlotsRepository extends JpaRepository<Slots, Integer>{

	@Query("select s from Slots s where doctor_id = :d")
	public List<Slots> getTimeTableByDoctorId(Doctor d);
	
	@Query("select s from Slots s where doctor_id = :d and weekday = :day")
	public Slots getAppointmentByIdAndDay(Doctor d, String day);
}
