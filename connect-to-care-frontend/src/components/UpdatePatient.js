import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';


function UpdatePatient() {

    const navigate = useNavigate();
    //const [city, setCity] = useState([]);
    //const [area, setArea] = useState([]);
    const [data, setData] = useState({
        patientId: "",
        username: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        aadharNumber: "",
        gender: "",
        dob: "",
        blood_group: "",
        login_id: "",
    });


    const [Error, setError] = useState({

        user_name_error: "",
        first_name_error: "",
        last_name_error: "",
        mobile_number_error: "",
        aadhar_number_error: "",
        areaId_error: ""
    });

    const [flag, setFlag] = useState({
        username: true,
        firstName: true,
        lastName: true,
        mobileNumber: true,
        aadharNumber: true,
        areaId: true,
    });

    const validateFirstName = (e) => {
        let name = e.target.value;
        if (name === "") {
            setError({ ...Error, first_name_error: "Please enter First Name" });
            setFlag({ ...flag, firstName: false });

        }
        else {
            setError({ ...Error, first_name_error: "" });
            setFlag({ ...flag, firstName: true });

        }
    }
    const validateLastName = (e) => {
        let name = e.target.value;
        if (name === "") {
            setError({ ...Error, last_name_error: "Please enter Last Name" });
            setFlag({ ...flag, lastName: false });
            console.log(flag.lastName);

        }
        else {
            setError({ ...Error, last_name_error: "" });
            setFlag({ ...flag, lastName: true });
            console.log(flag.lastName);

        }
    }
    const validateMobileNumber = (e) => {
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
    const validateAadharNumber = (e) => {
        let aadharNumber = e.target.value;
        let mnRegex = new RegExp(/^[0-9]{12}$/);
        if (mnRegex.test(aadharNumber) === true) {
            setError({ ...Error, aadhar_number_error: "" });
            setFlag({ ...flag, aadharNumber: true });

        }
        else {
            setError({ ...Error, aadhar_number_error: "Aadhar Number should be 12 digits" });
            setFlag({ ...flag, aadharNumber: false });

        }
    }

    const changeHandler = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value
        }));
        console.log(e.target.value)
    }

    const refreshPage = (e) => {
        window.location.reload();
    };

    useEffect(() => {
        let patient = JSON.parse(sessionStorage.getItem("patient"));
        setData({
            patientId: patient.patient_id, username: patient.username, firstName: patient.firstName, lastName: patient.lastName,
            aadharNumber: patient.aadharNumber, gender: patient.gender, dob: patient.dob, mobileNumber: patient.mobileNumber, blood_group: patient.blood_group, login_id: patient.login_id
        })
    }, []);

    const submitData = (e) => {
        e.preventDefault();
        //console.log(flag.firstName+" "+flag.lastName+" "+flag.mobileNumber)
        if (flag.firstName && flag.lastName && flag.mobileNumber && flag.aadharNumber) {
            const reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    patient_id: data.patientId,
                    username: data.username,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    mobileNumber: data.mobileNumber,
                    aadharNumber: data.aadharNumber,
                    gender: data.gender,
                    dob: data.dob,
                    blood_group: data.blood_group,
                    login_id: data.login_id
                })
            }
            fetch("http://localhost:8080/updatepatient", reqOptions)
                .then(resp => resp.text())
                .then(data => {
                    if (data.length != 0) {
                        const json = JSON.parse(data);
                        alert("update successful!!!");
                        sessionStorage.setItem("patient", JSON.stringify(json))
                        navigate('/patient');
                    }
                    else {
                        alert("Failed!!!");
                        window.location.reload();
                    }
                })
        }
        else {
            alert("All fields are compulsory and must follow guidelines");
            // window.location.reload();
            navigate('/updatepatient');
        }

    }

    return (
        <div className="container fluid">

            <img className="update" alt=""></img>

            <br /><br />
            <div className="container ">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3"
                        style={{
                            right: "300px",
                            top: "40px",
                            backgroundColor: "transparent"
                        }}>
                        <h2 className='text-center'>Update Information </h2>
                        <form method="POST">

                            {/* <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Username: </b></label>
                                <input type="text" placeholder={data.username} name="username" className="form-control"
                                    value={data.username} onChange={changeHandler} disabled={true} />
                                <span className="text text-danger">{Error.user_name_error}</span>
                            </div> */}

                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  First Name: </b></label>
                                <input type="text" placeholder={data.firstName} name="firstName" className="form-control"
                                    value={data.firstName} onChange={changeHandler} onBlur={validateFirstName} />
                                <span className="text text-danger">{Error.first_name_error}</span>
                            </div>
                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Last Name: </b></label>
                                <input type="text" placeholder={data.lastName} name="lastName" className="form-control"
                                    value={data.lastName} onChange={changeHandler} onBlur={validateLastName} />
                                <span className="text text-danger">{Error.last_name_error}</span>
                            </div >
                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Mobile Number: </b></label>
                                <input type="text" placeholder={data.mobileNumber} name="mobileNumber" className="form-control"
                                    value={data.mobileNumber} onChange={changeHandler} onBlur={validateMobileNumber} />
                                <span className="text text-danger">{Error.mobile_number_error}</span>
                            </div>

                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Patient Aadhar Number: </b></label>
                                <input type="text" placeholder={data.aadharNumber} name="aadharNumber" className="form-control"
                                    value={data.aadharNumber} onChange={changeHandler} onBlur={validateAadharNumber} disabled={true} />
                                <span className="text text-danger">{Error.aadhar_number_error}</span>
                            </div>

                            {/* <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Gender: </b></label>
                <input type="text" placeholder={data.gender} name="gender" className="form-control" 
                    value={data.gender} onChange={changeHandler} disabled/>
            </div> */}

                            {/* <div style={{ marginTop: '10px' }} className = "form-group" onChange={changeHandler}>
                <label><b>  Gender: </b></label>
                <input style={{ marginLeft: '10px' }} type="radio" value="Male" name="gender" disabled={true}/> Male
                <input style={{ marginLeft: '10px' }} type="radio" value="Female" name="gender" disabled={true}/> Female
                <input style={{ marginLeft: '10px' }} type="radio" value="Other" name="gender" disabled={true}/> Other
            </div> */}

                            <div style={{ marginTop: '10px' }} className="form-group" onChange={changeHandler}>
                                <label><b>  Gender: </b></label>
                                <input style={{ marginLeft: '10px' }} type="radio" value="Male" name="gender" checked={data.gender === 'Male'} disabled /> Male
                                <input style={{ marginLeft: '10px' }} type="radio" value="Female" name="gender" checked={data.gender === 'Female'} disabled /> Female
                                <input style={{ marginLeft: '10px' }} type="radio" value="Other" name="gender" checked={data.gender === 'Other'} disabled /> Other
                            </div>

                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Date of Birth: </b></label>
                                <input type="date" placeholder={data.dob} name="dob" className="form-control"
                                    value={data.dob} onChange={changeHandler} disabled={true} />
                            </div >

                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Blood Group: </b></label>
                                <input type="text" placeholder={data.blood_group} name="graduation" className="form-control"
                                    value={data.blood_group} onChange={changeHandler} disabled={true} />
                            </div >

                            {/* <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Area: </b></label>

                                <select style={{ marginLeft: '10px' }} name="state" onChange={cityFetch}>
                                    <option value="0" >--state--</option>
                                    {
                                        data.state.map((v) => {
                                            return (
                                                <option key={v.stateId} value={v.stateId} >{v.stateName}</option>
                                            )
                                        })
                                    }
                                </select>

                                <select style={{ marginLeft: '10px' }} name="city" onChange={areaFetch}>
                                    <option value="0" >--city--</option>
                                    {
                                        city.map((v) => {
                                            return (
                                                <option key={v.cityId} value={v.cityId} >{v.cityName}</option>
                                            )
                                        })
                                    }
                                </select>

                                <select style={{ marginLeft: '10px' }} name="areaId" value={data.areaId} onChange={changeHandler} onBlur={validateArea}>
                                    <option value="">--area--</option>
                                    {
                                        area.map((v) => {
                                            return (
                                                <option key={v.areaId} value={v.areaId} >{v.areaName}</option>
                                            )
                                        })
                                    }
                                </select>
                                <span className="text text-danger">{Error.areaId_error}</span>
                            </div><br /> */}


                            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                                <button className="btn btn-success" onClick={submitData}>Update</button>
                                <button type="button" className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={refreshPage}>Reset</button>
                                <button className="btn btn-danger" onClick={() => navigate("/patient")} style={{ marginLeft: "10px" }}>Cancel</button>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default UpdatePatient;

