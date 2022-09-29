package com.cdac.project.entities;

public class ParameterData {
	private int patient_id;
	private String height;
	private String weight;
	private String bmi;
	private String hb;
	private String blood_pressure;
	private String blood_sugar;
	private String blood_group;
	
	
	public ParameterData() {
		super();
	}

	public ParameterData(int patient_id,String height, String weight, String bmi, String hb, String blood_pressure, String blood_sugar,
			String blood_group) {
		super();
		this.patient_id = patient_id;
		this.height = height;
		this.weight = weight;
		this.bmi = bmi;
		this.hb = hb;
		this.blood_pressure = blood_pressure;
		this.blood_sugar = blood_sugar;
		this.blood_group = blood_group;
		
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getBmi() {
		return bmi;
	}

	public void setBmi(String bmi) {
		this.bmi = bmi;
	}

	public String getHb() {
		return hb;
	}

	public void setHb(String hb) {
		this.hb = hb;
	}

	public String getBlood_pressure() {
		return blood_pressure;
	}

	public void setBlood_pressure(String blood_pressure) {
		this.blood_pressure = blood_pressure;
	}

	public String getBlood_sugar() {
		return blood_sugar;
	}

	public void setBlood_sugar(String blood_sugar) {
		this.blood_sugar = blood_sugar;
	}

	public String getBlood_group() {
		return blood_group;
	}

	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}

	public int getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}

	
}
