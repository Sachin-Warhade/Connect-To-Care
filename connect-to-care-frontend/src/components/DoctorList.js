import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const doctor_url = 'http://localhost:8080/patient';

const ListPatientComponent = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch(doctor_url)
        .then(r => r.json())
        .then(d => setDoctors(d));
        console.log(doctors);
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
                        <th>Doctor First Name</th>
                        <th>Doctor Last Name</th>
                        <th>Doctor Mobile Number</th>
                        <th>Doctor Specialization</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map(
                            doctor =>
                            <tr key = {doctor.id}>
                                <td>{doctor.firstName}</td>
                                <td>{doctor.lastName}</td>
                                <td>{doctor.mobileNumber}</td>
                                <td>{doctor.specialization}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListPatientComponent;