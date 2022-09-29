import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Patient() {
    const [patient, setPatient] = useState({
        firstName: "",
        lastName: "",

    })
    const navigate = useNavigate();

    useEffect(() => {
        let pa = JSON.parse(sessionStorage.getItem("patient"));
        setPatient({ firstName: pa.firstName, lastName: pa.lastName })
    }, []);

    const logout = () => {
        sessionStorage.clear();
        navigate("/");
    }

    return (
        <>
            {/* <div className="container fluid">
            <button className="btn btn-primary" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
            <div className="container-fluid">
                <h1>Patient DashBoard</h1>
                <h2>Welcome...{state.firstName} {state.lastName}</h2>
                <button className='btn btn-primary' onClick={() => navigate("/updatepatient")} style={{ marginLeft: "10px", marginTop: "10px" }}>Update Profile</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/searchdoctor")}>Search Doctor</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/patientcurrentappointments")}>Current Appointments</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/patientappointmenthistory")}>Appointment History</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/patientcurrentappointments")}>Cancel Appointments</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/searchdoctor")}>Book Appointment</button>
            </div>

        </div> */}
            <div className="container" style={{ marginBottom: "50px", marginTop: "60px" }}>
                <div className="row my-3">
                    <div className="col-sm-6"><h2 className="">Hello, {patient.firstName} {patient.lastName}</h2></div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger offset-10 text-uppercase" onClick={logout}>Logout</button>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Update Profile</h5>
                                <p className="card-text">Update your account details.</p>
                                <button className="btn btn-primary" onClick={() => navigate("/updatepatient")}>UPDATE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Book Appointment</h5>
                                <p className="card-text">Search Hospital and get desired doctor.</p>
                                <button className="btn btn-info" onClick={() => navigate("/searchhospital")}>BOOK</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Appointments</h5>
                                <p className="card-text">All Appointment details are here</p>
                                <button className="btn btn-success" onClick={() => navigate("/viewappointment")}>VIEW</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Health Timeline</h5>
                                <p className="card-text">Check your health time line</p>
                                <button className="btn btn-success" onClick={() => navigate("/viewhealthtimeline")}>VIEW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Parameter</h5>
                                <p className="card-text">See your health parameters</p>
                                <button className="btn btn-warning" onClick={() => navigate("/parameter")}>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Update Parameter</h5>
                                <p className="card-text">Update your health parameters.</p>
                                <button className="btn btn-warning" onClick={() => navigate("/updateparameter")}>UPDATE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
















{/*
class Patient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patientId: '',
            firstName: ''
        }

    }
    componentDidMount(){
        let patient = JSON.parse(sessionStorage.getItem("patient"));
        this.setState({
            patientId: patient.patient_id,
            firstName: patient.first_name
        })
    }
    render() {
        return (
            <div>
                <h1>Patient Page{this.state.patientId}{this.state.firstName}</h1>
            </div>
        );
    }
}
*/}
export default Patient;