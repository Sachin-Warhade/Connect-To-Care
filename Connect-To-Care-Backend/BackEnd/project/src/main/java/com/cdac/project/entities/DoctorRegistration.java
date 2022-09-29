package com.cdac.project.entities;

import java.sql.Date;

public class DoctorRegistration {
	private String userName;
	private String password;
	private String firstName;
	private String lastName;
	private String mobileNumber;
	private String gender;
	private Date dob;
	private String graduation;
	private String postGraduation;
	private String speciality;
	private String aadharNumber;
	private int areaId;
	private int hospitalId;
	
	public DoctorRegistration() {
		super();
	}


	public DoctorRegistration(String userName, String password, String firstName, String lastName, String mobileNumber,
			String gender, Date dob, String graduation, String postGraduation, String speciality,String aadharNumber, int fees,
			int areaId, int hospitalId) {
		super();
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNumber = mobileNumber;
		this.gender = gender;
		this.dob = dob;
		this.graduation = graduation;
		this.postGraduation = postGraduation;
		this.speciality = speciality;
		this.aadharNumber = aadharNumber;
		this.areaId = areaId;
		this.hospitalId = hospitalId;
	}
	
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
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
	public void setPostGraduation(String postGraduation) {
		this.postGraduation = postGraduation;
	}
	public String getAadharNumber() {
		return aadharNumber;
	}
	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}
	public int getAreaId() {
		return areaId;
	}
	public void setAreaId(int areaId) {
		this.areaId = areaId;
	}
	public int getHospitalId() {
		return areaId;
	}
	public void setHospitalId(int hospitalId) {
		this.hospitalId = hospitalId;
	}

	@Override
	public String toString() {
		return "DoctorRegistration [userName=" + userName + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", mobileNumber=" + mobileNumber + ", gender=" + gender + ", dob=" + dob
				+ ", graduation=" + graduation + ", postGraduation=" + postGraduation + ", speciality=" + speciality
				+ ", aadharNumber=" + aadharNumber + ", areaId=" + areaId + "]";
	}
	
}
