package com.cdac.project.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


import com.cdac.project.entities.Doctor;
import com.cdac.project.entities.Hospital;
import com.cdac.project.entities.Login;
//import com.example.demo.entities.Patient;
import com.cdac.project.repositories.DoctorRepository;

@Service
public class DoctorService {

	@Autowired
	DoctorRepository drepo;
	
//	@Autowired
//	JavaMailSender jms;
	
	//fetch patient by login details
	public Doctor getOneByLoginId(Login id) {
		return drepo.getOneByLoginId(id);
	}
	public Doctor saveDoctor(Doctor d) {	
		
		try {
			return drepo.save(d);
		} catch (Exception e) {
			return null;
		}
	}
	
	public Doctor updateDoctor(Doctor d) {
		// TODO Auto-generated method stub
		try {
			return drepo.save(d);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}
	//fetch Doctor by it's id
	public Optional<Doctor> getOneDoctor(int id) {
		// TODO Auto-generated method stub
		return drepo.findById(id);
	}
	public List<Doctor> allDoctors() {
		return drepo.findAll();
		
	}
//	public List<Doctor> allDoctorsByState(int id) {
//
//		return drepo.getDoctorByState(id);
//	}
//	public List<Doctor> allDoctorsByCity(City c) {
//		// TODO Auto-generated method stub
//		return drepo.getDoctorByCity(c);
//	}
	
	public List<Doctor> allDoctorsByHospital(Hospital id) {
		// TODO Auto-generated method stub
		return drepo.getDoctorsByHospital(id);

	}
	public Doctor getOneById(int id) {
		//return drepo.getOneById(id);
		return drepo.findById(id).get();
	}
	public List<Object> allDoctorsSpeciality() {
		return drepo.allDoctorsSpeciality();
	}
	
}
