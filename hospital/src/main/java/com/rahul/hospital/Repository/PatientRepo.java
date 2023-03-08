package com.rahul.hospital.Repository;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rahul.hospital.Entity.PatientDetails;

public interface PatientRepo extends JpaRepository<PatientDetails, Integer>
{
	
}
