import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';


function UpdateHospital() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        hospitalName: "",
        mobileNumber: "",
        speciality: "",
        areaId: {},
        login_id: "",
        hospitalId: ""
    });

    const [Error, setError] = useState({
        hospital_name_error: "",
        contact_number_error: "",
        speciality_error: ""
    });

    const [flag, setFlag] = useState({
        hospitalName: false,
        mobileNumber: false,
        speciality: false,
    });


    const validateHospitalName = (e) => {
        let name = e.target.value;
        if (name === "") {
            setError({ ...Error, hospital_name_error: "Please enter First Name" });
            setFlag({ ...flag, hospitalName: false });

        }
        else {
            setError({ ...Error, hospital_name_error: "" });
            setFlag({ ...flag, hospitalName: true });

        }
    }

    const validatemobileNumber = (e) => {
        let mobileNumber = e.target.value;
        let mnRegex = new RegExp(/^[0-9]{10}$/);
        if (mnRegex.test(mobileNumber) === true) {
            setError({ ...Error, mobile_number_error: "" });
            setFlag({ ...flag, mobileNumber: true });

        }
        else {
            setError({ ...Error, mobile_number_error: "Mobile Number should be 10 digits without +91 or 0" });
            setFlag({ ...flag, mobileNumber: false });

        }
    }

    const validateSpeciality = (e) => {
        let spec = e.target.value;
        if (spec === "") {
            setError({ ...Error, speciality_error: "Please enter Speciality" });
            setFlag({ ...flag, speciality: false });

        }
        else {
            setError({ ...Error, speciality_error: "" });
            setFlag({ ...flag, speciality: true });

        }
    }
    const changeHandler = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value
        }));
        console.log(e.target.name + " " + e.target.value)
    }
    const refreshPage = (e) => {
        window.location.reload();
    };

    const logout = () => {
        sessionStorage.clear();
        navigate("/");
    }

    useEffect(() => {
        let hospital = JSON.parse(sessionStorage.getItem("hospital"));
        setData({
            hospitalId: hospital.hospitalId, username: hospital.username, hospitalName: hospital.hospitalName, mobileNumber: hospital.mobileNumber, speciality: hospital.speciality,
            login_id: hospital.login_id, areaId: hospital.areaId,
        })
    }, []);

    const submitData = (e) => {
        // console.log(data);
        e.preventDefault();
        const tempHospital = JSON.parse(sessionStorage.getItem("hospital")).areaId;
        if (flag.hospitalName) {
            const reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    hospitalName: data.hospitalName,
                    username: data.username,
                    mobileNumber: data.mobileNumber,
                    speciality: data.speciality,
                    login_id: data.login_id,
                    hospitalId: data.hospitalId,
                    areaId: tempHospital
                })
            }
            fetch("http://localhost:8080/updatehospital", reqOptions)
                .then(resp => resp.text())
                .then(data => {
                    if (data.length != 0) {
                        const json = JSON.parse(data);
                        alert("Update  Successful!!!");
                        sessionStorage.setItem("hospital", JSON.stringify(json))
                        navigate('/hospital');
                    }
                    else {
                        alert("Failed!!!");
                        //window.location.reload();
                        navigate('/updatehospital');
                    }
                })
        }
        else {
            alert("All fields are compulsory and must follow guidelines");
            // window.location.reload();
            navigate('/updatehospital');
        }

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
        else (
            navigate("/")
        )
    }

    return (
        <div className="container fluid" style={{ marginBottom: "50px" }}>

            <img src="Images/UDBACK.jpg" className="login" alt=""></img>

            <button className="btn btn-danger" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
            <button className='btn btn-secondary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/hospital")}>Go Back</button>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3"
                        style={{
                            right: "400px",
                            top: "150px",
                            backgroundColor: "transparent"
                        }}>
                        <h2 className='text-center'> Update Information </h2>

                        <form method="POST">
                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Hospital Name: </b></label>
                                <input type="text" placeholder="Hospital Name" name="hospitalName" className="form-control"
                                    value={data.hospitalName} onChange={changeHandler} onBlur={validateHospitalName} />
                                <span className="text text-danger">{Error.hospital_name_error}</span>
                            </div>
                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Contact Number: </b></label>
                                <input type="text" placeholder="Hospital mobileNumber" name="mobileNumber" className="form-control"
                                    value={data.mobileNumber} onChange={changeHandler} onBlur={validatemobileNumber} />
                                <span className="text text-danger">{Error.mobile_number_error}</span>
                            </div>

                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Speciality: </b></label>
                                <input type="text" placeholder="Speciality" name="speciality" className="form-control"
                                    value={data.speciality} onChange={changeHandler} onBlur={validateSpeciality} />
                                <span className="text text-danger">{Error.speciality_error}</span>
                            </div >

                            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                                <button className="btn btn-success" onClick={submitData}>Update</button>
                                <button type="button" className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={refreshPage}>Reset</button>
                                <button className="btn btn-danger" onClick={Goback} style={{ marginLeft: "10px" }}>Cancel</button>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default UpdateHospital;