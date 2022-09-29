package com.cdac.project.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int login_id;
	@Column
	private String userName ;
	@Column
	private String password;
	@Column
	private String role;

	@JsonIgnoreProperties("login_id")
	@OneToOne(cascade = CascadeType.ALL,mappedBy = "login_id")
	private Patient patient;
	
	@JsonIgnoreProperties("login_id")
	@OneToOne(cascade = CascadeType.ALL,mappedBy = "login_id")
	private Doctor doctor;
	
	@JsonIgnoreProperties("login_id")
	@OneToOne(cascade = CascadeType.ALL,mappedBy = "login_id")
	private Hospital hospital;
	
	public Login() {
		super();
	}
	//add new user 
	public Login(String user_name, String password, String role) {
		super();
		this.userName = user_name;
		this.password = password;
		this.role = role;
	}
	//fetch existing user 
	public Login(int login_id, String user_name, String password, String role) {
		super();
		this.login_id = login_id;
		this.userName = user_name;
		this.password = password;
		this.role = role;
	}
	//logincheck
	public Login(String user_name, String password) {
		super();
		this.userName = user_name;
		this.password = password;
	}
	public Login(String user_name) {
		super();
		this.userName = user_name;
	}
	public int getLogin_id() {
		return login_id;
	}
	public void setLogin_id(int login_id) {
		this.login_id = login_id;
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
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
}
