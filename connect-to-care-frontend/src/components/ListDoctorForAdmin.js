import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const doctor_url = 'http://localhost:8080/alldoctors';

const ListDoctorForAdmin = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch(doctor_url)
            .then(r => r.json())
            .then(d => setDoctors(d));
        console.log(doctors);
    }, []);

    const navigate = useNavigate();
    return (
        <div className='container' style={{ marginBottom: "50px", marginTop: "60px" }}>
            <button className='btn btn-secondary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/admin")}>Go Back</button>
            <br></br>
            <h2 className='text-ceter'>Doctors List</h2>
            <table className='table table-bordered table-striped'>
                <thead className='bg-dark text-light'>
                    <tr>
                        <th>Doctor First Name</th>
                        <th>Doctor Last Name</th>
                        <th>Doctor Mobile Number</th>
                        <th>Doctor Specialization</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map(
                            doctor =>
                                <tr key={doctor.id}>
                                    <td>{doctor.firstName}</td>
                                    <td>{doctor.lastName}</td>
                                    <td>{doctor.mobileNumber}</td>
                                    <td>{doctor.speciality}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListDoctorForAdmin;