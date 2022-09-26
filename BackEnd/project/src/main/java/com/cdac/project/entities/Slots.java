package com.cdac.project.entities;

import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Slots {
	
	@Id
	@Column(name="slot_id")
	int slotId;
	
	@JsonIgnoreProperties("timetable")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="doctor_id")
	Doctor doctor_id;
	
	@Column
	String weekday;

	@Column(name="start_time")
	LocalTime startTime;
	
	@Column(name="end_time")
	LocalTime endTime;
	
	@Column(name="slot_duration")
	int slotDuration;
	
	@Column(name="break_time")
	LocalTime breakTime;
	
	@Column
	String status;
	
	public Slots() {
		super();
	}



	public Slots(Doctor doctor_id, String weekday, LocalTime startTime, LocalTime endTime, int slotDuration,
			LocalTime breakTime, String status) {
		super();
		this.doctor_id = doctor_id;
		this.weekday = weekday;
		this.startTime = startTime;
		this.endTime = endTime;
		this.slotDuration = slotDuration;
		this.breakTime = breakTime;
		this.status = status;
	}



	public Slots(int ttId, Doctor doctor_id, String weekday, LocalTime startTime, LocalTime endTime,
			int slotDuration, LocalTime breakTime, String status) {
		super();
		this.slotId = ttId;
		this.doctor_id = doctor_id;
		this.weekday = weekday;
		this.startTime = startTime;
		this.endTime = endTime;
		this.slotDuration = slotDuration;
		this.breakTime = breakTime;
		this.status = status;
	}



	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public int getTtId() {
		return slotId;
	}

	public void setTtId(int sotId) {
		this.slotId = slotId;
	}

	public Doctor getDoctor_id() {
		return doctor_id;
	}

	public void setDoctor_id(Doctor doctor_id) {
		this.doctor_id = doctor_id;
	}

	public String getWeekday() {
		return weekday;
	}

	public void setWeekday(String weekday) {
		this.weekday = weekday;
	}

	public LocalTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}

	public LocalTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}

	public int getSlotDuration() {
		return slotDuration;
	}

	public void setSlotDuration(int slotDuration) {
		this.slotDuration = slotDuration;
	}

	public LocalTime getBreakTime() {
		return breakTime;
	}

	public void setBreakTime(LocalTime breakTime) {
		this.breakTime = breakTime;
	}

}
