
**a)Per each entity, document name, synonyms, and description in the glossary**

  1)hospital:
    synonyms:health_center, clinic
    
    Hospitals help in providing the names of all the available hospital locations in a particular location and help to track the medical services.

  2)medicine:
    synonyms:remedy, drug
    
    Medicines provide a list of all the names of medical drugs which are available in the stores and hospitals.

  3)patient_feedback:
    synonyms: observation,comment
    
    Each patient can provide feedback to the medical services provided to them. These feedbacks are stored in the patient_feedback entity.

  4)mode_of_payment: 
    synonyms: modalities_of_payment, form_of_payment
    
    This entity provides an overview of the payment history of the transactions done by the patients in medical centers.

  5)doctor:
    synonyms:physician,clinician
    
    Each hospital has specialized doctors which assist in the medical treatment of the patients. The details about them are contained in this entity.

  6)patient:
    synonyms:sufferer,victim
    
    The medical details of the patients are listed in this entity.

  7)employee:
    synonyms:artisan,workman
    
    Each hospital has a list of employee which help in day to day activities of the hospital. These names are included in this table.



**b)Per each relationship, determine relationship maxima and minima and document it in the glossary** 

  
  1)patient M(1) make mode_of_payment 0(0)
  
  2)patient M(0) gives patient_feedback M(0)
  
  3)doctor M(0) partOf employee M(0)
  
  4)hospital M(1) contains medicine M(0)
  
  5)hospital M(0) consists employee M(0)
  
  6)patient M(0) visits hospital M(1)


**c)Per each attribute, determine attribute maxima and minima and document it in the glossary**

  1)hospital
  Attributes:
  
    employee_id:  1 - 1 
    
    first_name :  M - 1
    
    last_name :   M - 1
    
    email :       1 - M
    
    description :  M - M
    
    address	:  M - M
    
    city   :  M - M
    
    country  :  M- M
    
    pincode: 	M - M


  2) medicine
  Attributes:
	
	medicine_id:  1 - 1
	  
	medicine_name: 1 - 1
	  
	price:     1 - M
	  
	expiry_term_year: 1 - M
	  
	hospital_id:    1 - M
	  

  3)patient_feedback
  Attributes:
  
  	patient_id: 1 - 1
	
	Employee_id: M - M
	
    feedback: M - M
	
    patient_name: M - 1
	
    date_of_feedback: M - M
	
    review: M - M


4)mode_of_payment: 
Attributes:

	payment_id: 1 - 1
	
    	first_name: M - 1
	
    	last_name: M - 1
	
    	type_of_payment : M - M
	
    	doc_referred: M - M
	
    	date_of_transaction: M - M


5)employee:
	Attribute:
	
    Employee_id: 1 - 1
	  
    first_name: M - 1
    
    last_name: M - 1
    
    email: 1 - M
    
    hospital_name: M - M
    
    description: M - M
    
    address: M - M
    
    city: M - M
    
    country: M - M
    
    salary: M - 1
    
    type_of_employement: M - 1



6)doctor: 
Attributes:

  	doctor_employee_id: 1 - 1
	
 	 first_name: M - 1
  
  	last_name: M - 1
  
  	email : 1 - M
  
  	phone_number: M - M
  	
  	speciality: M - M
  
  	description: M - M
  
  	address: M - M
  
  	city: M - M 
  
  	pincode: M - 1
  
  	country: M - 1
  
  	hospital_id: M - 1

7)patient:
 Attribute:
 
  	patient_id: 1 - 1
  
 	 employee_id:
  
 	 first_name: M - 1
  
 	 username: 1-1
  
  	password: 1-1
  
  	address: M - 1
  
 	 city: M - 1
  
 	 country: M - 1
  
  	payment_id: 1 - 1

