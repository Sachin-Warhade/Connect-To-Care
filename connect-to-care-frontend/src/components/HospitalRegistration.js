import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function HospitalRegistration() {
    const navigate = useNavigate();
    const [city, setCity] = useState([]);
    const [area, setArea] = useState([]);
    const [data, setData] = useState({
        userName: "",
        password: "",
        hospitalName: "",
        mobileNumber: "",
        speciality: "",
        areaId: "",
        state: []
    });

    const [Error, setError] = useState({
        user_name_error: "",
        password_error: "",
        hospital_name_error: "",
        mobile_number_error: "",
        speciality_error: "",
        areaId_error: ""
    });

    const [flag, setFlag] = useState({
        userName: false,
        password: false,
        hospitalName: false,
        mobileNumber: false,
        speciality: false,
        areaId: false,
    });

    const validateEmail = (e) => {
        let email = e.target.value;
        let emailRegex = new RegExp(/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,4}$/);
        if (emailRegex.test(email) === true) {
            setError({ ...Error, user_name_error: "" });
            setFlag({ ...flag, userName: true });

        }
        else {
            setError({ ...Error, user_name_error: "Email format should be 'abc@gmail.com' and it can include (A-Z a-z 0-9 . _ -)" });
            setFlag({ ...flag, userName: false });

        }
    }

    const validatePassword = (e) => {
        let pass = e.target.value;
        let passRegex = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,16}$/);
        if (passRegex.test(pass) === true) {
            setError({ ...Error, password_error: "" });
            setFlag({ ...flag, password: true });

        }
        else {
            setError({ ...Error, password_error: "Password must be alphanumeric and should contains at least a special character with min length 8 and max length 16" });
            setFlag({ ...flag, password: false });

        }
    }

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
    // const validateGenger=(e)=>{
    //     let gender = e.target.name;
    //     if(gender.checked){
    //         setError({...Error,gender_error:""});
    //     }
    //     else{
    //         setError({...Error,gender_error:"Gender must be selected"});
    //     }
    // }

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

    const validateArea = (e) => {
        let area = e.target.value;
        if (area === "") {
            setError({ ...Error, areaId_error: "Please enter area" });
            setFlag({ ...flag, areaId: false });

        }
        else {
            setError({ ...Error, areaId_error: "" });
            setFlag({ ...flag, areaId: true });

        }
    }

    // const [state,setState]=useState();
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


    const cityFetch = (e) => {
        const val = e.target.value;
        console.log(val);
        fetch("http://localhost:8080/getcitybystate/" + val)
            .then(r => r.json())
            .then(d => setCity(d));
        console.log(city);
    }


    const areaFetch = (e) => {
        const val = e.target.value;
        fetch("http://localhost:8080/areabycity/" + val)
            .then(r => r.json())
            .then(d => setArea(d))
        console.log(area)
    }

    useEffect(() => {
        fetch("http://localhost:8080/allstates")
            .then(r => r.json())
            .then(d => setData({ ...data, state: d }))
        // console.log(data.state)
    }, []);


    const submitData = (e) => {
        // console.log(data);
        e.preventDefault();
        // console.log(flag.userName+" "+flag.password+" "+flag.firstName+" "+flag.lastName+" "+flag.mobileNumber+" "+flag.dob+" "+" "+flag.graduation+" "+flag.speciality
        // +" "+flag.fees+" "+flag.areaId);
        if (flag.userName && flag.password && flag.hospitalName && flag.mobileNumber && flag.speciality
            && flag.areaId) {
            const reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: data.userName,
                    password: data.password,
                    hospitalName: data.hospitalName,
                    mobileNumber: data.mobileNumber,
                    speciality: data.speciality,
                    areaId: data.areaId
                })
            }
            fetch("http://localhost:8080/savehospital", reqOptions)
                .then(resp => resp.text())
                .then(data => {
                    if (data.length !== 0) {
                        alert("New Hospital added successfully!!!");
                        navigate('/login');
                    }
                    else {
                        alert("Failed!!!");
                        navigate('/registerhospital');
                        //window.location.reload();
                    }
                })
        }
        else {
            alert("All fields are compulsory and must follow guidelines");
            // window.location.reload();
            navigate('/registerhospital');
        }

    }

    return (
        <div className="container fluid" style={{ marginBottom: "50px", marginTop: "80px" }}>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className='text-center'>Hospital Registration </h2>

                        <form method="POST">
                            <div className="form-group">
                                <label><b> User Name: </b></label>
                                <input type="text" placeholder="User Name" name="userName" className="form-control"
                                    value={data.userName} onChange={changeHandler} onBlur={validateEmail} />
                                <span className="text text-danger">{Error.user_name_error}</span>
                            </div>
                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Password: </b></label>
                                <input type="password" placeholder="Password" name="password" className="form-control"
                                    value={data.password} onChange={changeHandler} onBlur={validatePassword} />
                                <span className="text text-danger">{Error.password_error}</span>
                            </div >
                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Hospital Name: </b></label>
                                <input type="text" placeholder="Hospital Name" name="hospitalName" className="form-control"
                                    value={data.hospitalName} onChange={changeHandler} onBlur={validateHospitalName} />
                                <span className="text text-danger">{Error.hospital_name_error}</span>
                            </div>
                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Contact Number: </b></label>
                                <input type="text" placeholder="Hospital Contact Number" name="mobileNumber" className="form-control"
                                    value={data.mobileNumber} onChange={changeHandler} onBlur={validateMobileNumber} />
                                <span className="text text-danger">{Error.mobile_number_error}</span>
                            </div>

                            <div style={{ marginTop: '10px' }} className="form-group">
                                <label><b>  Speciality: </b></label>
                                <input type="text" placeholder="Speciality" name="speciality" className="form-control"
                                    value={data.speciality} onChange={changeHandler} onBlur={validateSpeciality} />
                                <span className="text text-danger">{Error.speciality_error}</span>
                            </div >

                            <div style={{ marginTop: '10px' }} className="form-group">
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
                            </div>

                            <div style={{ marginTop: "15px", marginBottom: "15px" }}>
                                <button className="btn btn-success" onClick={submitData}>Register</button>
                                <button type="button" className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={refreshPage}>Reset</button>
                                <button className="btn btn-danger" onClick={() => navigate("/")} style={{ marginLeft: "10px" }}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default HospitalRegistration;

