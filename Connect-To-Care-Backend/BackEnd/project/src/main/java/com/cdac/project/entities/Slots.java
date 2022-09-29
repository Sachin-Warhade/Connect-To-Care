package com.cdac.project.entities;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Slots {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int slotId;
	
	@JsonIgnoreProperties("timetable")
	@ManyToOne
	@JoinColumn(name="doctor_id")
	private Doctor doctor_id;
	
	@Column
	private String weekday;

	@Column(name="start_time")
	private LocalTime startTime;
	
	@Column(name="end_time")
	private LocalTime endTime;
	
	@Column(name="slot_duration")
	int slotDuration;
	
	@Column(name="break_time")
	private LocalTime breakTime;
	

	public Slots() {
		super();
	}
	
	public Slots(Doctor doctor_id, String weekday, LocalTime startTime, LocalTime endTime, int slotDuration,
			LocalTime breakTime ) {
		super();
		this.doctor_id = doctor_id;
		this.weekday = weekday;
		this.startTime = startTime;
		this.endTime = endTime;
		this.slotDuration = slotDuration;
		this.breakTime = breakTime;
		
	}

	public Slots(int slotId, Doctor doctor_id, String weekday, LocalTime startTime, LocalTime endTime,
			int slotDuration, LocalTime breakTime) {
		super();
		this.slotId = slotId;
		this.doctor_id = doctor_id;
		this.weekday = weekday;
		this.startTime = startTime;
		this.endTime = endTime;
		this.slotDuration = slotDuration;
		this.breakTime = breakTime;
	
	}

	
	public int getSlotId() {
		return slotId;
	}

	public void setSlotId(int slotId) {
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
