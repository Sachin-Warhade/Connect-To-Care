import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

function Admin() {
    const navigate = useNavigate();

    /*useEffect(() => {
        let doc = JSON.parse(sessionStorage.getItem("doctor"));
        setDoctor({ firstName: doc.firstName, lastName: doc.lastName })
    }, []);
*/
    const logout = () => {
        sessionStorage.clear();
        navigate("/");
    }

    return (
        <div className="container" style={{ marginBottom: "50px", marginTop: "80px" }}>

            <div className="row my-3">
                <div className="col-sm-6"><h2 className="">Hello, Admin</h2></div>
                <div className="col-sm-6" >
                    <button className="btn btn-danger offset-10 text-uppercase" onClick={logout} >Logout</button>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">View Hospital List</h5>
                            <p className="card-text">View details of all registered Hospitals.</p>
                            <button className="btn btn-warning" onClick={() => navigate("/hospitallist")}>VIEW</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">View Doctor List</h5>
                            <p className="card-text">View details of all registered doctors.</p>
                            <button className="btn btn-warning" onClick={() => navigate("/doctorlist")}>VIEW</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row my-3">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">View Patient List</h5>
                            <p className="card-text">View details of all registered patients.</p>
                            <button className="btn btn-warning" onClick={() => navigate("/patientlist")} >VIEW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Admin;