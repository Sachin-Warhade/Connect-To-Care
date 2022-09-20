package com.cdac.ConnectToCare.pojo;

import java.util.Date;

public class Doctor {
	private String firstName;
	private String lastName;
	private String emailId;
	private Date dob;
	private String gender;
	private String mobileNumber;
	private String aadharNumber;
	
	private String graduation;
	private String postGraduation;
	private String specialization;
	private String langugaeKnow;
	private String Experience;
	private String diseases;
	
	public Doctor() {

	}

	public Doctor(String firstName, String lastName, String emailId, Date dob, String gender, String mobileNumber,
			String aadharNumber, String graduation, String postGraduation, String specialization, String langugaeKnow,
			String experience, String diseases) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.dob = dob;
		this.gender = gender;
		this.mobileNumber = mobileNumber;
		this.aadharNumber = aadharNumber;
		this.graduation = graduation;
		this.postGraduation = postGraduation;
		this.specialization = specialization;
		this.langugaeKnow = langugaeKnow;
		Experience = experience;
		this.diseases = diseases;
	}

	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getEmailId() {
		return emailId;
	}
	
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	public Date getDob() {
		return dob;
	}
	
	public void setDob(Date dob) {
		this.dob = dob;
	}
	
	public String getGender() {
		return gender;
	}
	
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getMobileNumber() {
		return mobileNumber;
	}
	
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	
	public String getAadharNumber() {
		return aadharNumber;
	}
	
	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
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
	
	public void setPostGraduation(String postGraduation) {
		this.postGraduation = postGraduation;
	}
	
	public String getSpecialization() {
		return specialization;
	}
	
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	
	public String getLangugaeKnow() {
		return langugaeKnow;
	}
	
	public void setLangugaeKnow(String langugaeKnow) {
		this.langugaeKnow = langugaeKnow;
	}
	
	public String getExperience() {
		return Experience;
	}
	
	public void setExperience(String experience) {
		Experience = experience;
	}
	
	public String getDiseases() {
		return diseases;
	}
	
	public void setDiseases(String diseases) {
		this.diseases = diseases;
	}
}
