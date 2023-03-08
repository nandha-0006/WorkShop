package com.rahul.hospital.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rahul.hospital.Entity.PatientDetails;
import com.rahul.hospital.Repository.PatientRepo;

@Service
public class PatientService {
	@Autowired
	private PatientRepo pat;

	public List<PatientDetails> getALlDetails() 
	{
		return pat.findAll();
	}

	public PatientDetails addDetails(PatientDetails d) {
		return pat.save(d);
	}
	
	public PatientDetails update(PatientDetails d) {
		return pat.saveAndFlush(d);
	}

	public String delete(int id) {
		try {
			if(!pat.findById(id).isEmpty())
			{
				pat.deleteById(id);
				return "id Removed";
			}
			else 
				throw new Exception("Error");
		}
		catch(Exception e) {
			return "Id "+id+" not found";
		}
	}

	public Optional<PatientDetails> getAllId(int id) {
		// TODO Auto-generated method stub
		return pat.findById(id);
	}
}
