import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const patient_url = 'http://localhost:8080/patient';

const ListPatientComponent = () => {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch(patient_url)
        .then(r => r.json())
        .then(d => setPatients(d));
        console.log(patients);
    });

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">Connect To Care</NavLink>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link active" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/patientlist">Patient List</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/hospitallist">Hospital List</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/doctorlist">Doctor List</NavLink></li>
                    </ul>
                </div>
            </nav>
            <h2 className='text-ceter'>Patients List</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Patient First Name</th>
                        <th>Patient Last Name</th>
                        <th>Patient Address</th>
                        <th>Patient Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map(
                            patient =>
                            <tr key = {patient.id}>
                                <td>{patient.firstName}</td>
                                <td>{patient.lastName}</td>
                                <td>{patient.location}</td>
                                <td>{patient.mobileNumber}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListPatientComponent;