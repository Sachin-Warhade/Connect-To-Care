package com.cdac.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.entities.City;
import com.cdac.project.entities.State;
import com.cdac.project.repositories.CityRepository;

@Service
public class CityService {

	@Autowired
	CityRepository crepo;
	
	public List<City> getCityByStateId(State s){
		return crepo.getCityByStateId(s);
	}
	
	public City getCityById(int id) {
		//return crepo.getCityById(id);
		return crepo.findById(id).get();
		//return crepo.getById(id);
	}
	
	public City saveCity(City c) {
		
		try{
			return crepo.save(c);
		}catch(Exception e) {
			return null;
		}
	}

	public List<City> allcities() {
		
		return crepo.findAll();
	}
}
