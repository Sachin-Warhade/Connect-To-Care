import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Doctor() {
    const [doctor, setDoctor] = useState({
        firstName: "",
        lastName: "",
        speciality: ""

    })
    const navigate = useNavigate();

    useEffect(() => {
        let doc = JSON.parse(sessionStorage.getItem("doctor"));
        setDoctor({ firstName: doc.firstName, lastName: doc.lastName, speciality: doc.speciality })
    }, []);

    const logout = () => {
        sessionStorage.clear();
        navigate("/");
    }


    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

            <div className="container" style={{ marginBottom: "50px", marginTop: "60px" }}>

                <div className="row my-3">
                    <div className="col-sm-6"><h2 className="">Hello, Dr. {doctor.firstName} {doctor.lastName} ({doctor.speciality})</h2></div>
                    <div className="col-sm-6" >
                        <button className="btn btn-danger offset-10 text-uppercase" onClick={logout} >Logout</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Your Rating</h5>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star unchecked"></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Update Profile</h5>
                                <p className="card-text">Update your account details.</p>
                                <button className="btn btn-primary" onClick={() => navigate("/updatedoctor")}>UPDATE</button>
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
                                <button className="btn btn-primary" onClick={() => navigate("/viewappointmentdoctor")}>VIEW</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Create Appointment Slot</h5>
                                <p className="card-text">Create your Slot time table.</p>
                                <button className="btn btn-success" onClick={() => navigate("/createslot")} >CREATE</button>

                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Cancel Appointments</h5>
                                <p className="card-text">Cancel your appointments.</p>
                                <button className="btn btn-danger">CANCEL</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Appointment</h5>
                                <p className="card-text">Check your appointment.</p>
                                <button className="btn btn-info">CHECK</button>
                            </div>
                        </div>
                    </div>
                </div>
    */}
                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">View Slot</h5>
                                <p className="card-text">Check your current available slots.</p>
                                <button className="btn btn-success" onClick={() => navigate("/viewslot")}>CHECK</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Change Password</h5>
                                <p className="card-text">Change your password.</p>
                                <button className="btn btn-warning" onClick={() => navigate("")}>CHANGE</button>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </>
    );

}

export default Doctor;