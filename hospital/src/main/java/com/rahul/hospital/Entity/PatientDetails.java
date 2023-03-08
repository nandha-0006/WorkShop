package com.rahul.hospital.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="HospitalManagement")
public class PatientDetails 
{
	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="Name")
	private String Name;
	
	@Column(name="Age")
	private int Age;
	
	@Column(name="BloodGroup")
	private String Bloodgroup;
	
	@Column(name="MobileNo")
	private long Mobileno;
	
	@Column(name="Place")
	private String Place;
	
	@Column (name="HealthIssues")
	private String Healthissues;
	
	public PatientDetails() {};
	@SuppressWarnings("unused")
	private PatientDetails (int id , String name , int age , String bloodgroup , long mobileno , String place , String healthissues)
	{
		super();
		this.id=id;
		this.Name=name;
		this.Age=age;
		this.Bloodgroup=bloodgroup;
		this.Mobileno=mobileno;
		this.Place=place;
		this.Healthissues=healthissues;
		
	}
	public long getId()
	{
		return id;
	}
	public void setId(int id)
	{
		this.id=id;
	}
	public String getName()
	{
		return Name;
	}
	public void setName(String Name)
	{
		this.Name=Name;
	}
	public int getAge()
	{
		return Age;
	}
	public void setAge(int Age)
	{
		this.Age=Age;
	}
	public String getBloodGroup()
	{
		return Bloodgroup;
	}
	public void setBloodGroup(String BloodGroup)
	{
		this.Bloodgroup=BloodGroup;
	}
	public long getMobile_no()
	{
		return Mobileno;
	}
	public void setMobile_no(long Mobile_no)
	{
		this.Mobileno=Mobile_no;
	}
	public String getPlace()
	{
		return Place;
	}
	public void setPlace(String Place)
	{
		this.Place=Place;
	} 
	public String getHealthissues()
	{
		return Healthissues;
	}
	public void setHealthissues(String Healthissues)
	{
		this.Healthissues=Healthissues;
	} 
}
