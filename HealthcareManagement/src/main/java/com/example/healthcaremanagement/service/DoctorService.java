package com.example.healthcaremanagement.service;

import com.example.healthcaremanagement.entity.Doctor;
import com.example.healthcaremanagement.pojos.DoctorRequest;
import com.example.healthcaremanagement.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public record DoctorService(DoctorRepository doctorRepository) {

    @Autowired
    public DoctorService {
    }

    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }

    public Doctor save(Doctor doctor){
        doctorRepository.save(doctor);
        return doctor;
    }

    public Doctor getDoctor(String email){
        Doctor doctor = doctorRepository.findByEmail(email);
        return doctor;
    }

}
