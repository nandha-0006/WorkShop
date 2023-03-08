package com.rahul.hospital.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rahul.hospital.Entity.PatientDetails;
import com.rahul.hospital.Service.PatientService;
@CrossOrigin("http://localhost:3000")
@RestController
public class PatientController {
	@Autowired
	private PatientService patservice;
	
	@GetMapping("/getdetail")
	public List<PatientDetails> getdetails()
	{
		return patservice.getALlDetails();
	}
	
	@GetMapping("/getdetail/{id}")
	public Optional<PatientDetails> getbyid(@PathVariable int id)
	{
		return patservice.getAllId(id);
	}
	
	
	@PostMapping("/post")
	public PatientDetails postDetails(@RequestBody PatientDetails d)
	{
		return patservice.addDetails(d);
	}

	@PutMapping("/update/{id}")
	public String update(@RequestBody PatientDetails d)
	{
		patservice.update(d);
		return "Details updated";
	}
	
	
	@DeleteMapping("/delete{id}")
	public String delete (@PathVariable int id)
	{
		return patservice.delete(id);
	}
}
