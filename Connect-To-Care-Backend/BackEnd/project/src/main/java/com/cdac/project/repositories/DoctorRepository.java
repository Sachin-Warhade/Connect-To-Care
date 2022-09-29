package com.cdac.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.project.entities.Doctor;
import com.cdac.project.entities.Hospital;
import com.cdac.project.entities.Login;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer>{
	
	@Query("select d from Doctor d where login_id = :id")
	public Doctor getOneByLoginId(Login id);
	
	//select doctors of sepcific hospital 
	@Query("select d from Doctor d where hospital_id = :id")
	public List<Doctor> getDoctorsByHospital(Hospital id);

	@Query("select d from Doctor d where doctor_id = :id")
	public Doctor getOneById(int id);

//	@Query("select d from Doctor d where area_id in (select a.areaId from Area a where city_id = : c)")
//	public List<Doctor> getDoctorByCity(City c);

	@Query("select DISTINCT(d.speciality) from Doctor d")
	public List<Object> allDoctorsSpeciality();

}
