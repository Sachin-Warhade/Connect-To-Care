package com.cdac.project.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class HealthTimeline {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int healthId;
	
	@Column(name = "date")
	private Date date;
	
	@Column(name = "symptoms")
	private String symptoms;

	@Column(name = "medicines")
	private String medicines;
	
	@Column(name = "advice")
	private String advice;
	
	@Column(name = "remark")
	private String remark;
	
	@JsonIgnoreProperties("healthtimeline")
	@ManyToOne
	@JoinColumn(name="doctor_id")
	private Doctor doctor_id;
	
	public Doctor getDoctor_id() {
		return doctor_id;
	}

	public void setDoctor_id(Doctor doctor_id) {
		this.doctor_id = doctor_id;
	}

	public Patient getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(Patient patient_id) {
		this.patient_id = patient_id;
	}

	@JsonIgnoreProperties("healthtimeline")
	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient patient_id;
	
	public HealthTimeline() {
		super();
	}

	public HealthTimeline(int healthId, Date date, String symptoms, String medicines, String advice, String remark,
			Doctor doctor_id, Patient patient_id) {
		super();
		this.healthId = healthId;
		this.date = date;
		this.symptoms = symptoms;
		this.medicines = medicines;
		this.advice = advice;
		this.remark = remark;
		this.doctor_id = doctor_id;
		this.patient_id = patient_id;
	}
	
	public HealthTimeline(Date date, String symptoms, String medicines, String advice, String remark,
			Doctor doctor_id, Patient patient_id) {
		super();
		this.date = date;
		this.symptoms = symptoms;
		this.medicines = medicines;
		this.advice = advice;
		this.remark = remark;
		this.doctor_id = doctor_id;
		this.patient_id = patient_id;
	}
	
	

	public int getHealthId() {
		return healthId;
	}

	public void setHealthId(int healthId) {
		this.healthId = healthId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}

	public String getMedicines() {
		return medicines;
	}

	public void setMedicines(String medicines) {
		this.medicines = medicines;
	}

	public String getAdvice() {
		return advice;
	}

	public void setAdvice(String advice) {
		this.advice = advice;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
	
}
