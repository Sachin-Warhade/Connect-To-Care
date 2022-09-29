import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
//import Table from 'react-bootstrap/Table'

function AppointmentViewForDoctor() {
    const [doctorId, setDoctorId] = useState("");
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        let doc = JSON.parse(sessionStorage.getItem("doctor"));
        setDoctorId(doc.doctorId);
    }, []);


    const currentappointments = () => {
        fetch("http://localhost:8080/appointmentsbydid/" + doctorId)
            .then(r => r.json())
            .then(d => setAppointments(d))
    }

    const appointmentshistory = () => {
        fetch("http://localhost:8080/getappointmenthistorybydid/" + doctorId)
            .then(r => r.json())
            .then(d => setAppointments(d))
    }

    const navigate = useNavigate();

    const cancel = (ev) => {
        console.log(ev);
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                appointmentId: ev.appointmentId,
                appointmentDate: ev.appointmentDate,
                appointmentTime: ev.appointmentTime,
                appointmentType: ev.appointmentType,
                doctorId: ev.doctorId,
                patientId: ev.patientId,
                status: "cancelled",
                cancelledBy: "Doctor"
            })
        }
        fetch("http://localhost:8080/cancelappointment", reqOptions)
            .then(resp => resp.text())
            .then(data => {
                if (data.length != 0) {
                    alert("Appointment cancelled!");
                    navigate('/viewappointmentdoctor');
                }
                else {
                    alert("Appointment cancel Failed!!!");
                    window.location.reload();
                }
            })
    }

    const logout = () => {
        sessionStorage.clear();
        navigate("/");
    }

    const Goback = () => {
        if (sessionStorage.getItem("loggedInUser") == "patient") {
            navigate("/patient")
        }
        if (sessionStorage.getItem("loggedInUser") == "doctor") {
            navigate("/doctor")
        }
        if (sessionStorage.getItem("loggedInUser") == "hospital") {
            navigate("/hospital")
        }
    }

    return (
        <>
            <div className="container my-4" style={{ marginBottom: "50px" }}>
                <div style={{ marginBottom: "50px", marginTop: "80px" }} >
                    <button className="btn btn-danger" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
                    <button className='btn btn-secondary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={Goback}>Go Back</button>
                </div>
                <br></br>
                <div>
                    <button className="btn btn-primary" onClick={appointmentshistory}>Appointments History</button> &nbsp; &nbsp;
                    <button className="btn btn-primary" onClick={currentappointments}>Current Appointments</button>
                    <h3>Patient Appointment List</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>Appointment Date</th>
                                <th>Appointment Time</th>
                                <th>Appointment Type</th>
                                <th>Appointment Status</th>
                                <th>Patient Name</th>
                                <th>Add Prescription</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((v) => {
                                return (
                                    <tr>
                                        <td>{v.appointmentDate}</td>
                                        <td>{v.appointmentTime}</td>
                                        <td>{v.appointmentType}</td>
                                        <td>{v.status}</td>
                                        <td>{v.patientId.firstName} {v.patientId.lastName}</td>
                                        <td><button className="btn btn-primary" onClick={() => navigate("/healthtimeline/" + v.patientId.patient_id)}>Prescription</button></td>
                                        <td><button className="btn btn-primary" onClick={() => cancel(v)}>Cancel Appointment</button></td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div></>
    );
}
export default AppointmentViewForDoctor;