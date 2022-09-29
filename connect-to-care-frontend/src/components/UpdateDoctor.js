import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';


function UpdateDoctor() {


    const navigate = useNavigate();
    // const [state,setState]=useState([]);
    // const [city,setCity]=useState([]);
    // const [area,setArea]=useState([]);

    const [data, setData] = useState({
        doctorId: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        aadharNumber: "",
        gender: "",
        dob: "",
        graduation: "",
        postGraduation: "",
        speciality: "",
        login_id: ""
    });

    const [Error, setError] = useState({
        first_name_error: "",
        last_name_error: "",
        mobile_number_error: "",
        gender_error: "",
        graduation_error: "",
        postGraduation_error: "",
        speciality_error: "",
    });

    const [flag, setFlag] = useState({

        firstName: true,
        lastName: true,
        mobileNumber: true,
        speciality: true,
        gender: true,
        graduation: true,
        postGraduation: true,
        speciality: true,
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

    const validateGraduation = (e) => {
        let grad = e.target.value;
        if (grad === "") {
            setError({ ...Error, graduation_error: "Please enter Graduation" });
            setFlag({ ...flag, graduation: false });

        }
        else {
            setError({ ...Error, graduation_error: "" });
            setFlag({ ...flag, graduation: true });

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

    useEffect(() => {
        let doctor = JSON.parse(sessionStorage.getItem("doctor"));
        setData({
            doctorId: doctor.doctorId, username: doctor.username, firstName: doctor.firstName, lastName: doctor.lastName,
            aadharNumber: doctor.aadharNumber, gender: doctor.gender, dob: doctor.dob, mobileNumber: doctor.mobileNumber,
            blood_group: doctor.blood_group, login_id: doctor.login_id, graduation: doctor.graduation, postGraduation: doctor.postGraduation,
            speciality: doctor.speciality, hospitalId: doctor.hospitalId
        })
    }, []);

    const submitData = (e) => {
        e.preventDefault();
        //console.log(flag.firstName+" "+flag.lastName+" "+flag.mobileNumber+" "+flag.speciality+" "+flag.fees)
        if (flag.firstName && flag.lastName && flag.mobileNumber && flag.speciality) {
            const reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    doctorId: data.doctorId,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    mobileNumber: data.mobileNumber,
                    aadharNumber: data.aadharNumber,
                    gender: data.gender,
                    dob: data.dob,
                    graduation: data.graduation,
                    postGraduation: data.postGraduation,
                    speciality: data.speciality,
                    hospitalId: data.hospitalId,
                    login_id: data.login_id
                })
            }
            fetch("http://localhost:8080/updatedoctor", reqOptions)
                .then(resp => resp.text())
                .then(data => {
                    if (data.length != 0) {
                        const json = JSON.parse(data);
                        alert("UPdate Successful!!!");
                        sessionStorage.setItem("doctor", JSON.stringify(json))
                        navigate('/doctor');
                    }
                    else {
                        alert("Failed!!!");
                        //window.location.reload();
                        navigate('/updatedoctor');
                    }
                })
        }
        else {
            alert("All fields are compulsory and must follow guidelines");
            // window.location.reload();
            navigate('/updatedoctor');
        }


    }

    return (
        <div className="container fluid" style={{ marginBottom: "50px" }}>

            <img src="Images/UDBACK.jpg" className="login" alt=""></img>

            <button className='btn btn-secondary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/doctor")}>Go Back</button>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3"
                        style={{
                            right: "400px",
                            top: "30px",
                            backgroundColor: "transparent"
                        }}>
                        <h2 className='text-center'>Update Information </h2>

                        <form method="POST">

                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  First Name: </b></label>
                                <input type="text" name="firstName" placeholder={data.firstName} className="form-control"
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
                                <label><b>  Doctor Aadhar Number: </b></label>
                                <input type="text" placeholder={data.aadharNumber} name="aadharNumber" className="form-control"
                                    value={data.aadharNumber} onChange={changeHandler} disabled={true} />
                                <span className="text text-danger">{Error.aadhar_number_error}</span>
                            </div>
                            <div style={{ marginTop: '10px' }} className="form-group" >
                                <label><b> Gender: </b></label>
                                <input style={{ marginLeft: '10px' }} type="radio" value="Male" name="gender" checked={data.gender === 'Male'} disabled /> Male
                                <input style={{ marginLeft: '10px' }} type="radio" value="Female" name="gender" checked={data.gender === 'Female'} disabled /> Female
                                <input style={{ marginLeft: '10px' }} type="radio" value="Other" name="gender" checked={data.gender === 'Other'} disabled /> Other
                            </div>

                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Date of Birth: </b></label>
                                <input type="date" placeholder={data.dob} name="dob" className="form-control"
                                    value={data.dob} disabled />
                            </div >

                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Graduation: </b></label>
                                <input type="text" placeholder={data.graduation} name="graduation" className="form-control"
                                    value={data.graduation} onChange={changeHandler} onBlur={validateGraduation} />
                            </div >

                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Post Graduation: </b></label>
                                <input type="text" placeholder={data.postGraduation} name="postGraduation" className="form-control"
                                    value={data.postGraduation} onChange={changeHandler} />
                            </div >

                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Speciality: </b></label>
                                <input type="text" placeholder={data.speciality} name="speciality" className="form-control"
                                    value={data.speciality} onChange={changeHandler} onBlur={validateSpeciality} />
                                <span className="text text-danger">{Error.speciality_error}</span>
                            </div >


                            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                                <button className="btn btn-success" onClick={submitData}>Update</button>
                                <button type="button" className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={refreshPage}>Reset</button>
                                <button className="btn btn-danger" onClick={() => navigate("/doctor")} style={{ marginLeft: "10px" }}>Cancel</button>


                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default UpdateDoctor;

