import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const patient_url = 'http://localhost:8080/allpatients';

const ListPatientForAdmin = () => {

    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch(patient_url)
            .then(r => r.json())
            .then(d => setPatients(d));
        console.log(patients);
    }, []);

    return (
        <div className='container' style={{ marginBottom: "50px", marginTop: "80px" }}>
            <button className='btn btn-secondary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/admin")}>Go Back</button>
            <br></br>
            <h2 className='text-ceter'>Patients List</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Patient First Name</th>
                        <th>Patient Last Name</th>
                        <th>Patient Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map(
                            patient =>
                                <tr key={patient.id}>
                                    <td>{patient.firstName}</td>
                                    <td>{patient.lastName}</td>
                                    <td>{patient.mobileNumber}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListPatientForAdmin;