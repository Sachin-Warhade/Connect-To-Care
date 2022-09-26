package com.cdac.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.entities.Doctor;
import com.cdac.project.entities.Hospital;
import com.cdac.project.entities.Login;
import com.cdac.project.entities.Patient;
import com.cdac.project.repositories.DoctorRepository;
import com.cdac.project.repositories.HospitalRepository;
import com.cdac.project.repositories.LoginRepository;
import com.cdac.project.repositories.PatientRepository;

@Service
public class LoginService {

	@Autowired
	LoginRepository loginrepo;
	
	@Autowired
	PatientRepository patientrepo;
	
	@Autowired
	DoctorRepository doctorrepo;
	
	@Autowired
	HospitalRepository hospitalrepo;
	
	public List<Login> getAllUsers() {
		return loginrepo.findAll();
	}
	
	
	//find user by id
	public Optional<Login> getUser(int id) {
		return loginrepo.findById(id);
	}
	
	//add new user
	public Login saveUser(Login l) {
		try {
		return loginrepo.save(l);
		}catch(Exception e) {
			return null;
		}
	}
	
	//logincheck
	public Object LoginCheck(String user_name, String password) {
		
		Login login = loginrepo.logincheck(user_name, password);
		
		//if returns a record
		if(login != null) {
			Patient p = null;
			Doctor d = null;
			Hospital h = null;
			
			//if record is present
			if(login.getRole().equals("patient")) {
				try {
					p = patientrepo.getOneByLoginId(login);

				}catch(Exception e) {
					p=null;
				}
				return p;
			}//if record is Doctor
			else if(login.getRole().equals("doctor")) {
				try {
					d = doctorrepo.getOneByLoginId(login);
					
				}catch(Exception e) {
					System.out.println(e.getMessage());
					d=null;
				}
				return d;
			}
			else if(login.getRole().equals("hospital")) {
				try {
					h = hospitalrepo.getOneByLoginId(login);
				}catch(Exception e) {
					System.out.println(e.getMessage());
					h=null;
				}
				return h;
			}
			//if record is Admin
			else if(login.getRole().equals("Admin")) {
				return login;
			}
			else {
			return null;
			}
		
		}
		return null;
	}
	
	public Login updateUser(Login l) {
		try {
			return loginrepo.save(l);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}
//	public Login forgotPassword(String username) {
//		// TODO Auto-generated method stub
//		Login l = loginrepo.forgotPassword(username);
//		if(l != null) {
//			
//			return l;
//		}
//		else {
//			return null;
//		}
//
//	}
}
