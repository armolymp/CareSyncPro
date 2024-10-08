package com.example.healthcaremanagement.controller;

import com.example.healthcaremanagement.entity.Doctor;
import com.example.healthcaremanagement.entity.Patients;
import com.example.healthcaremanagement.pojos.DoctorRequest;
import com.example.healthcaremanagement.service.DoctorService;
import com.example.healthcaremanagement.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MainController {

    private final DoctorService doctorService;
    private final PatientService patientService;

    @Autowired
    public MainController(DoctorService doctorService, PatientService patientService) {
        this.doctorService = doctorService;
        this.patientService = patientService;
    }

    @GetMapping("/test")
    public String testGet() {
        return "Hello, Welcome to Main Controller!";
    }

    @GetMapping("/all")
    public List<Doctor> all(){
        return doctorService.getAllDoctors();
    }

    @GetMapping("/allPatients")
    public List<Patients> allPatients(){
        return patientService.getAllPatients();
    }

    @PostMapping("/add")
    public String addDoctor(@RequestBody Doctor doctor) {
        try {
            Doctor newDoctor = doctorService.save(doctor);
            return "S1000";
        } catch (Exception e) {
            return "E1000";
        }
    }

    @PostMapping("/addPatient")
    public String addPatient(@RequestBody Patients patient){
        try {
            Patients newPatient = patientService.save(patient);
            return "S1000";
        } catch (Exception e){
            return "E1000";
        }
    }

    @PostMapping("/login")
    public String loginDoctor(@RequestBody DoctorRequest loginRequest) {
        try {
            String email = loginRequest.getEmail();
            String password = loginRequest.getPassword();

            Doctor doctor = doctorService.getDoctor(email);

            if (doctor != null && doctor.getEmail().equals(email) && doctor.getPassword().equals(password)) {
                // Successful login
                return "S1000";
            } else {
                // Invalid email or password
                return "E1000";
            }
        } catch (Exception e) {
            return "E1001";
        }
    }

}
