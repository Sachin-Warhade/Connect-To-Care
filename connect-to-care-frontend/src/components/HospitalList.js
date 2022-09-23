import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const hsopital_url = 'http://localhost:8080/hospital';

const ListHospitalComponent = () => {

    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        fetch(hsopital_url)
        .then(r => r.json())
        .then(d => setHospitals(d));
        console.log(hospitals);
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
            <h2 className='text-ceter'>Hospitals List</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Hospital Name</th>
                        <th>Hospital Address</th>
                        <th>Hospital Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hospitals.map(
                            hospital =>
                            <tr key = {hospital.id}>
                                <td>{hospital.hospitalName}</td>
                                <td>{hospital.location}</td>
                                <td>{hospital.contactNumber}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListHospitalComponent;