import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const hsopital_url = 'http://localhost:8080/allhospitals';

const ListHospitalAdmin = () => {

    const [hospitals, setHospitals] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(hsopital_url)
            .then(r => r.json())
            .then(d => setHospitals(d));
        console.log(hospitals);
    }, []);

    return (
        <div className="container" style={{ marginBottom: "50px", marginTop: "80px" }}>
            <button className='btn btn-secondary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/admin")}>Go Back</button>
            <br></br>
            <h2 className='text-ceter'>Hospitals List</h2>
            <table className='table table-bordered table-striped'>
                <thead className='bg-dark text-light'>
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
                                <tr key={hospital.id}>
                                    <td>{hospital.hospitalName}</td>
                                    <td>{hospital.areaId.areaName}, {hospital.areaId.city_id.cityName}, {hospital.areaId.city_id.state_id.stateName}</td>
                                    <td>{hospital.mobileNumber}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListHospitalAdmin;