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

import com.cdac.project.entities.Login;
import com.cdac.project.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
	
	@Autowired
	LoginService loginservice;
	
	@GetMapping("/allusers")
	public List<Login> getAllUser(){
		return loginservice.getAllUsers();
	}
	
	@GetMapping("/user/{id}")
	public Optional<Login> getUser(@PathVariable int id){
		return loginservice.getUser(id);
	}
	
	@PostMapping("/updateuser")
	public Login updateUser(@RequestBody Login l) {
		return loginservice.updateUser(l);
	}
	
	//login check
	@PostMapping("/logincheck")
	public Object loginCheck(@RequestBody Login l){
		return loginservice.LoginCheck(l.getUser_name(),l.getPassword());
	}
	
//	@PostMapping("/forgotpassword")
//	public Login forgotPassword(@RequestBody Login l) {
//		return loginservice.forgotPassword(l.getUser_name());
//	}

}
