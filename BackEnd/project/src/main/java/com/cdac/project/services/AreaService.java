package com.cdac.project.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.entities.Area;
import com.cdac.project.entities.City;
import com.cdac.project.repositories.AreaRepository;

@Service
public class AreaService {

	@Autowired
	AreaRepository arepo;
	
	public Area getAreaById(int id) {
		//return arepo.findById(id);
//		try {
//			return arepo.getAreaById(id);
//		} catch (Exception e) {
//			return null;
//		}
		return arepo.findById(id).get();
	}
	
	public List<Area> getAreaByCityId(City c){
		return arepo.getAreaByCityId(c);
	}
	
	public Area saveArea(Area a) {
		
		try{
			return arepo.save(a);
		}catch(Exception e) {
			return null;
		}
	}

	public List<Area> allAreas() {

		return arepo.findAll();
	}
}
