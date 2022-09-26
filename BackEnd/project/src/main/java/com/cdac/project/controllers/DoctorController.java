package com.cdac.project.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entities.Area;
import com.cdac.project.entities.Doctor;
import com.cdac.project.entities.DoctorRegistration;
import com.cdac.project.entities.Hospital;
import com.cdac.project.entities.Login;
import com.cdac.project.services.AreaService;
import com.cdac.project.services.DoctorService;
import com.cdac.project.services.HospitalService;
import com.cdac.project.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DoctorController {
	
	@Autowired
	DoctorService dservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	AreaService aservice;
	
	@Autowired
	HospitalService hservice;
//	
//	@Autowired
//	DoctorTimeTableRepository dttrepo;
//	@Autowired
//	StateService sservice;
//	@Autowired
//	CityService cservice;
	
	@GetMapping("/alldoctors")
	public List<Doctor> allDoctors(){
		return dservice.allDoctors();
	}
	
//	@GetMapping("/alldoctorsbystate/{id}")
//	public List<Doctor> allDoctorsByState(@PathVariable int id){
//		return dservice.allDoctorsByState(id);
//	}
	
//	@GetMapping("/alldoctorsbycity/{id}")
//	public List<Doctor> allDoctorsByCity(@PathVariable int id){
//		City c = cservice.getCityById(id);
//		System.out.println(c);
//		return dservice.allDoctorsByCity(c);
//	}
	
	@GetMapping("/alldoctorsbyhospital")
	public List<Doctor> allDoctorsByHospital(){
		return dservice.allDoctorsByHospital();
	}
	
	@GetMapping("/doctorspeciality")
	public List<Object> allDoctorsSpeciality(){
		return dservice.allDoctorsSpeciality();
	}
	
	@GetMapping("/getonedoctor/{id}")
	public Optional<Doctor> getOneDoctor(@PathVariable int id) {
		return dservice.getOneDoctor(id);
	}
	
	@PostMapping("/savedoctor")
	public Doctor saveDoctor(@RequestBody DoctorRegistration dr) {
		System.out.println("*******"+dr);
		Login l = new Login(dr.getUserName(),dr.getPassword(),"Doctor");
		Login inserted = lservice.saveUser(l);
		Area area = aservice.getAreaById(dr.getAreaId());
		Hospital hospital = hservice.getOneById(dr.getHospitalId());
		//System.out.println(dr.getSpeciality());
		if((inserted != null) && (area != null)) {
			Doctor d = new Doctor(dr.getFirstName(),dr.getLastName(),dr.getMobileNumber(),dr.getGender(),dr.getDob(),dr.getGraduation(),dr.getPostGraduation(),dr.getSpeciality(),dr.getAadharNumber(),hospital,inserted);
			return dservice.saveDoctor(d);
		}
		else {
			return null;
		}
	}
	
	@PostMapping("/updatedoctor")
	public Doctor updateDoctor(@RequestBody Doctor dr) {
		try {
		return dservice.updateDoctor(dr);
		}
		catch(Exception e) {
			return null;
		}
	}
}
