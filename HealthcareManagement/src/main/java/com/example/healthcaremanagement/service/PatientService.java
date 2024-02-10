package com.example.healthcaremanagement.service;

import com.example.healthcaremanagement.entity.Doctor;
import com.example.healthcaremanagement.entity.Patients;
import com.example.healthcaremanagement.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public record PatientService(PatientRepository patientRepository) {

    @Autowired
    public PatientService{
    }

    public List<Patients> getAllPatients(){
        return patientRepository.findAll();
    }

    public Patients save(Patients patient){
        patientRepository.save(patient);
        return patient;
    }

}
