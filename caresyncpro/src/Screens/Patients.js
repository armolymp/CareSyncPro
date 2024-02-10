import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 18px;
  margin-top: 20px;
`;

const Patients = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Make a network call to the Spring Boot backend to get doctors
        axios.get('http://127.0.0.1:5000/all')
            .then(response => {
                setPatients(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Patients</h1>
            {loading && <LoadingMessage>Loading patients...</LoadingMessage>}
            {error && <ErrorMessage>Error: {error}</ErrorMessage>}
            {!loading && !error && (
                <Table>
                    <thead>
                    <tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Age</Th>
                        <Th>Gender</Th>
                        <Th>Phone number</Th>
                        <Th>Symptoms</Th>
                        <Th>Doctor Name</Th>
                        <Th>Drugs</Th>
                        <Th>Charge</Th>
                    </tr>
                    </thead>
                    <tbody>
                    {patients.map(patient => (
                        <tr key={patient.patient_id}>
                            <Td>{patient.patient_id}</Td>
                            <Td>{patient.name}</Td>
                            <Td>{patient.gender}</Td>
                            <Td>{patient.age}</Td>
                            <Td>{patient.phone_number}</Td>
                            <Td>{patient.symptoms}</Td>
                            <Td>{patient.doctor}</Td>
                            <Td>{patient.drugs}</Td>
                            <Td>{patient.charge_amount}</Td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default Patients;
