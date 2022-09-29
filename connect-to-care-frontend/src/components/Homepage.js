import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './Homepage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Homepage() {
    const navigate = useNavigate();

    return (

        <div className="container-fluid" style={{ marginBottom: "50px" }}>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary container-fluid">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand h1" to="/">Connect To Care</NavLink>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link active" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/aboutus">About Us</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/contactus">Contact Us</NavLink></li>
                    </ul>
                </div>
            </nav>
            <div>
                <div >
                    <video className="videoStyle" width="10" autoPlay muted loop>
                        <source src="assets/video.mp4" type="video/mp4" />
                    </video>
                    <div style={{ marginLeft: "5px", marginRight: "15px", marginTop: "80px" }}>
                        <div>
                            <h1>Welcome To CONNECT TO CARE</h1>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card mb-3 d-flex align-items-stretch">
                                    <div className="card-body d-flex flex-column">
                                        <p className="card-text text-dark">Connect To Care web application Log In for Patients, Doctor & Hospital. </p>
                                        <button className='btn btn-primary btn-outline-light btn-lg ' onClick={() => navigate("/login")}>Log In</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card d-flex align-items-stretch">
                                    <div className="card-body d-flex flex-column">
                                        <p claclassNamess="card-text text-dark">Register with our protal for hasselfree healtcare services for patients.</p>
                                        <button className='btn btn-primary btn-outline-light btn-lg ' onClick={() => navigate("/patientSignup")}>Sign Up as Patient</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card d-flex align-items-stretch">
                                    <div className="card-body d-flex flex-column">
                                        <p className="card-text text-dark">Register with our protal for various services for Hospital and Doctor.</p>
                                        <button className='btn btn-primary btn-outline-light btn-lg ' onClick={() => navigate("/registerhospital")}>Register Hospital</button>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col-sm-3 d-flex flex-column justify-content-right ">
                                    {<SimpleForm />}
                                </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="page-footer fixed-bottom bg-primary text-light">
                <div className='container '>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link mt-0 pb-0 pt-0" to="/Terms">Terms of service</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link mt-0 pb-0 pt-1" to="/Privacypolicy">Privacy policies</NavLink></li>
                    </ul>
                </div>
                <div className="container-fluid ">
                    <p className="text-center mb-0">Copyright &copy;2022 Connect-To-Care.com</p>
                </div>
            </footer>
        </div >
    );
}

export default Homepage;