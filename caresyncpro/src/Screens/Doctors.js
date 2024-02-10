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

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Make a network call to the Spring Boot backend to get doctors
        axios.get('http://127.0.0.1:5000/all')
            .then(response => {
                setDoctors(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Doctors</h1>
            {loading && <LoadingMessage>Loading doctors...</LoadingMessage>}
            {error && <ErrorMessage>Error: {error}</ErrorMessage>}
            {!loading && !error && (
                <Table>
                    <thead>
                    <tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Speciality</Th>
                    </tr>
                    </thead>
                    <tbody>
                    {doctors.map(doctor => (
                        <tr key={doctor.doctorId}>
                            <Td>{doctor.doctorId}</Td>
                            <Td>{doctor.name}</Td>
                            <Td>{doctor.email}</Td>
                            <Td>{doctor.specialty}</Td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default Doctors;
