package com.example.healthcaremanagement.repository;

import com.example.healthcaremanagement.entity.Patients;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patients,Long> {
}
