package com.cdac.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.project.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	@Query("select l from Login l where user_name = :user_name and password = :password")
	public Login logincheck(String user_name, String password);

	@Modifying
	@Query("update Login set password = :password where user_name= :username")
	public void updatePassword(String username, String password);
	
	@Query("select l from Login l where user_name = :username")
	public Login checkUsername(String username);

}
