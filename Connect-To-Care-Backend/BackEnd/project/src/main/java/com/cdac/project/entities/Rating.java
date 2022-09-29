package com.cdac.project.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Rating {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "rating_id")
	private int ratingId;
	
	@Column(name = "stars")
    private float stars;
	
	@JsonIgnoreProperties("doctor")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="doctor_id")
	private Doctor doctor_id;
	
	@JsonIgnoreProperties("patient")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="patient_id")
	private Patient patient_id;

	public Rating() {
		super();
	}

	public Rating(int ratingId, float stars, Doctor doctor_id, Patient patient_id) {
		super();
		this.ratingId = ratingId;
		this.stars = stars;
		this.doctor_id = doctor_id;
		this.patient_id = patient_id;
	}

	public int getRatingId() {
		return ratingId;
	}

	public void setRatingId(int ratingId) {
		this.ratingId = ratingId;
	}

	public float getStars() {
		return stars;
	}

	public void setStars(float stars) {
		this.stars = stars;
	}

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

}
