import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Rating.css'

function Hospital() {
    const [hospital, setHospital] = useState({
        hospitalName: ""

    })
    const navigate = useNavigate();

    useEffect(() => {
        let hos = JSON.parse(sessionStorage.getItem("hospital"));
        setHospital({ hospitalName: hos.hospitalName })
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
                    <div className="col-sm-6"><h2 className="">Hello, {hospital.hospitalName}</h2></div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger offset-10 text-uppercase" onClick={logout}>Logout</button>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hospital Ranking</h5>
                                <span class="fa fa-star unchecked"></span>
                                <span class="fa fa-star unchecked"></span>
                                <span class="fa fa-star unchecked"></span>
                                <span class="fa fa-star unchecked"></span>

                                <span class="fa fa-star unchecked"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Update Hospital Profile</h5>
                                <p className="card-text">Update your account details.</p>
                                <button className="btn btn-primary" onClick={() => navigate("/updatehospital")}>BOOK</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add New Doctor</h5>
                                <p className="card-text">You can easliy add new doctor</p>
                                <button className="btn btn-success" onClick={() => navigate("/adddoctor")}>VIEW</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add New Patient</h5>
                                <p className="card-text">You can easliy add new patient</p>
                                <button className="btn btn-success" onClick={() => navigate("/patientSignup")}>VIEW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">View Doctors List</h5>
                                <p className="card-text">See all the doctors details of your hospital</p>
                                <button className="btn btn-warning" onClick={() => navigate("/listdoctorhospital")}>View</button>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">Update your health parameters.</p>
                                <button className="btn btn-warning" onClick={() => navigate("/updateparameter")}>BOOK</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Hospital;