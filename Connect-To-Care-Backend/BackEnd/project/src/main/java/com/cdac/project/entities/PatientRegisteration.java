package com.cdac.project.entities;

import java.sql.Date;

public class PatientRegisteration {

	private String userName;

	private String password;
	
	private String firstName;

	private String lastName;

	private String mobileNumber;

	private String gender;
	
	private String bloodGroup;
	
	private Date dob;
	
	private String aadharNumber;

	public PatientRegisteration() {
		super();
	}
	//create new instance

	public PatientRegisteration(String user_name, String password, String firstName, String lastName,
			String mobileNumber, String gender, String bloodGroup, Date dob, String aadharNumber) {
		super();
		this.userName = user_name;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNumber = mobileNumber;
		this.gender = gender;
		this.bloodGroup = bloodGroup;
		this.dob = dob;
		this.aadharNumber = aadharNumber;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String user_name) {
		this.userName = user_name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	
	
}
