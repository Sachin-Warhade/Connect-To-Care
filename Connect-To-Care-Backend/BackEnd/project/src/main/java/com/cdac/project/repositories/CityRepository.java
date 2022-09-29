package com.cdac.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.project.entities.City;
import com.cdac.project.entities.State;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {

	@Query("select c from City c where state_id = :s")
	public List<City> getCityByStateId(State s);
	
//	@Query("select c from City c where city_id = :id")
//	public City getCityById(int id);

}
