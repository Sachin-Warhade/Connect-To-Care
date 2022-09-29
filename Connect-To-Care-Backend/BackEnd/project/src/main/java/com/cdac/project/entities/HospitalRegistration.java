package com.cdac.project.entities;

public class HospitalRegistration {
	private String userName;
	private String password;
	private String hospitalName;
	private String mobileNumber;
	private String speciality;
	int areaId;
	
	public HospitalRegistration(String userName, String password, String hospitalName, String mobileNumber,
			String speciality,int areaId) {
		super();
		this.userName = userName;
		this.password = password;
		this.hospitalName = hospitalName;
		this.mobileNumber = mobileNumber;
		this.speciality = speciality;
		this.areaId = areaId;
	}

	public HospitalRegistration() {
		super();
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

	public String getHospitalName() {
		return hospitalName;
	}

	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public int getAreaId() {
		return areaId;
	}

	public void setAreaId(int areaId) {
		this.areaId = areaId;
	}

}
