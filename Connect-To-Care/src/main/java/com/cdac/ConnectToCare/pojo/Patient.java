package com.cdac.ConnectToCare.pojo;

import java.util.Date;

public class Patient {
	private String firstName;
	private String lastName;
	private String emailId;
	private Date dob;
	private String gender;
	private String mobileNumber;
	private String aadharNumber;
	private float height;
	private float weight;
	private float BMI;
	private float HB;
	private String bloodGroup;
	private String bloodPressure;
	private String bloodSugar;
	
	
	public Patient() {
	}
	
	public Patient(String firstName, String lastName, String emailId, Date dob, String gender, String mobileNumber,
			String aadharNumber, float height, float weight, float BMI, float HB, String bloodGroup,
			String bloodPressure, String bloodSugar) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.dob = dob;
		this.gender = gender;
		this.mobileNumber = mobileNumber;
		this.aadharNumber = aadharNumber;
		this.height = height;
		this.weight = weight;
		this.BMI = BMI;
		this.HB = HB;
		this.bloodGroup = bloodGroup;
		this.bloodPressure = bloodPressure;
		this.bloodSugar = bloodSugar;
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


	public float getHeight() {
		return height;
	}


	public void setHeight(float height) {
		this.height = height;
	}


	public float getWeight() {
		return weight;
	}


	public void setWeight(float weight) {
		this.weight = weight;
	}


	public float getBMI() {
		return BMI;
	}


	public void setBMI(float bMI) {
		BMI = bMI;
	}


	public float getHB() {
		return HB;
	}


	public void setHB(float hB) {
		HB = hB;
	}


	public String getBloodGroup() {
		return bloodGroup;
	}


	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}


	public String getBloodPressure() {
		return bloodPressure;
	}


	public void setBloodPressure(String bloodPressure) {
		this.bloodPressure = bloodPressure;
	}


	public String getBloodSugar() {
		return bloodSugar;
	}


	public void setBloodSugar(String bloodSugar) {
		this.bloodSugar = bloodSugar;
	}
	
	
	
	
}
