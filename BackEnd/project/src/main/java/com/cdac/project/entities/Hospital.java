package com.cdac.project.entities;

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
public class Hospital {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int hospitalId;
	
	@Column(name="hospital_name")
	String hospitalName;
	
	@Column(name="mobile_number")
	String mobileNumber;
	
	@Column(name="speciality")
	String speciality;
	
	@JsonIgnoreProperties("hospital")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="area_id")
	Area area_id;
	
	@JsonIgnoreProperties("hospital")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")
    Login login_id;
	
	public Hospital(String hospitalName, String mobileNumber,String speciality,Area areaId,Login loginId) {
		super();
		this.hospitalName = hospitalName;
		this.mobileNumber = mobileNumber;
		this.speciality = speciality;
		this.area_id = areaId;
		this.login_id = loginId;
	}
	
	public Hospital(int hospitalId,String hospitalName, String mobileNumber,String speciality,Area areaId,Login loginId) {
		super();
		this.hospitalId = hospitalId;
		this.hospitalName = hospitalName;
		this.mobileNumber = mobileNumber;
		this.speciality = speciality;
		this.area_id = areaId;
		this.login_id = loginId;
	}

	public Hospital() {
		super();
	}

	public int getHospitalId() {
		return hospitalId;
	}
	
	public void setHospitalId(int hospitalId) {
		this.hospitalId = hospitalId;
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
	
	public Area getAreaId() {
		return area_id;
	}

	public void setAreaId(Area areaId) {
		this.area_id = areaId;
	}
	
	public Login getLogin_id() {
		return login_id;
	}
	
	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}

}
