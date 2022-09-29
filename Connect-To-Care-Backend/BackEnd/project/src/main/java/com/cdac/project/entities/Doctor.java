package com.cdac.project.entities;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Doctor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int doctorId;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@Column(name="mobile_number")
	private String mobileNumber;
	@Column
	private String gender;
	@Column
	private Date dob;
	@Column
	private String graduation;
	@Column(name="post_graduation",nullable = true)
	private String postGraduation;
	@Column
	private String speciality;
	@Column
	private String aadharNumber;
	
	@JsonIgnoreProperties("doctor")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="hospital_id")
	private Hospital hospital_id;
	
	@JsonIgnoreProperties("doctor")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")
	private Login login_id;
	
	public Doctor() {
		super();
	}
	
	
public Doctor(String firstName, String lastName, String mobileNumber, String gender, Date dob, String graduation,
		String postGraduation, String specialty, String aadhar_number, Hospital hospitalId, Login login_id) {
	super();
	this.firstName = firstName;
	this.lastName = lastName;
	this.mobileNumber = mobileNumber;
	this.aadharNumber = aadhar_number;
	this.gender = gender;
	this.dob = dob;
	this.graduation = graduation;
	this.postGraduation = postGraduation;
	this.speciality = specialty;
	this.hospital_id = hospitalId;
	this.login_id = login_id;
}


public Doctor(int doctorId, String firstName, String lastName, String mobileNumber, String gender, Date dob,
			String graduation, String postGraduation, String specialty, String aadhar_number, Hospital hospitalId, Login login_id) {
		super();
		this.doctorId = doctorId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNumber = mobileNumber;
		this.aadharNumber = aadhar_number;
		this.gender = gender;
		this.dob = dob;
		this.graduation = graduation;
		this.postGraduation = postGraduation;
		this.speciality = specialty;
		this.hospital_id = hospitalId;
		this.login_id = login_id;
	}

	public int getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(int doctor_id) {
		this.doctorId = doctor_id;
	}
	
	public String getSpeciality() {
		return speciality;
	}


	public void setSpeciality(String specialty) {
		this.speciality = specialty;
	}


	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String first_name) {
		this.firstName = first_name;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String last_name) {
		this.lastName = last_name;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobile_number) {
		this.mobileNumber = mobile_number;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getGraduation() {
		return graduation;
	}
	public void setGraduation(String graduation) {
		this.graduation = graduation;
	}
	public String getPostGraduation() {
		return postGraduation;
	}
	public void setPostGraduation(String post_graduation) {
		this.postGraduation = post_graduation;
	}
	public String getAadharNumber() {
		return aadharNumber;
	}
	public void setAadharNumber(String aadhar_number) {
		this.aadharNumber = aadhar_number;
	}
	public Login getLogin_id() {
		return login_id;
	}
	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}
	public Hospital getHospitalId() {
		return hospital_id;
	}
	public void setHospitalId(Hospital hospitalId) {
		this.hospital_id = hospitalId;
	}
	
	
}
