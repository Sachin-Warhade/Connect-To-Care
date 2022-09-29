import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const ListDoctorForPatient = () => {
    const params = useParams();
    const h_Id = params.id;
    const [doctors, setDoctors] = useState([]);

    const appointment = (ev) => {
        sessionStorage.setItem("doctor", JSON.stringify(ev));
        navigate("/bookappointment");
    };

    useEffect(() => {
        fetch("http://localhost:8080/alldoctorsbyhospital/" + h_Id)
            .then(r => r.json())
            .then(d => setDoctors(d));
        console.log(doctors);
    }, []);


    const navigate = useNavigate();

    return (
        <div className='container' style={{ marginBottom: "50px", marginTop: "60px" }}>
            <button className='btn btn-secondary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/searchhospital")}>Go Back</button>
            <br></br>
            <h2 className='text-ceter'>Doctors List</h2>
            <table className='table table-bordered table-striped'>
                <thead className='bg-dark text-light'>
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
                                <tr key={doctor.id}>
                                    <td>{doctor.firstName}</td>
                                    <td>{doctor.lastName}</td>
                                    <td>{doctor.mobileNumber}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => appointment(doctor)}
                                        >
                                            Book Appointment
                                        </button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListDoctorForPatient;