import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        loginerror: ""
    });


    const changeHandler = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value
        }));
    }

    const navigate = useNavigate();

    const submitData = (e) => {
        if (data.username == '') {
            alert('Username cannot be null');
            return;
        }
        if (data.password == '') {
            alert('Password cannot be null');
            return;
        }
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: data.username,
                password: data.password
            })
        }
        fetch("http://localhost:8080/logincheck", reqOptions)
            .then(resp => resp.text())
            .then(data => {
                if (data.length !== 0) {
                    const json = JSON.parse(data);
                    if (json.login_id.role === "Patient") {
                        sessionStorage.setItem("patient", JSON.stringify(json))
                        sessionStorage.setItem("loggedInUser", "patient")
                        navigate('/patient');
                    }
                    if (json.role === "Admin") {
                        sessionStorage.setItem("admin", JSON.stringify(json))
                        sessionStorage.setItem("loggedInUser", "admin")
                        navigate('/admin');
                    }
                    if (json.login_id.role === "Doctor") {
                        sessionStorage.setItem("doctor", JSON.stringify(json))
                        sessionStorage.setItem("loggedInUser", "doctor")
                        navigate('/doctor');
                    }
                    if (json.login_id.role === "Hospital") {
                        sessionStorage.setItem("hospital", JSON.stringify(json))
                        sessionStorage.setItem("loggedInUser", "hospital")
                        navigate('/hospital');
                    }
                }
                else {
                    //setData({loginerror:"Wrong Username or Password (or account may be disabled)! Try Again..."})
                    alert("Wrong Username or Password Try Again...");
                }
            })

    }




    return (
        <div>
            <img className="login" alt="" ></img>

            <br /><br />
            <div className="container justify-content-right">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3"
                        style={{
                            right: "350px",
                            top: "140px",
                            backgroundColor: "transparent"
                        }}>
                        <h2 className='text-center'><b>Login</b></h2>

                        <form >
                            <div className="form-group">
                                <label><b> User Name: </b></label>
                                <input type="email" placeholder="Enter Email ID" name="username" className="form-control"
                                    value={data.username} onChange={changeHandler} />

                            </div>
                            <div className="form-group">
                                <label><b> Password: </b></label>
                                <input type="password" placeholder="Password" name="password" className="form-control"
                                    value={data.password} onChange={changeHandler} />

                            </div>
                            <div style={{ marginTop: "10px", marginLeft: "200px" }}>
                                <button className="btn btn-success" onClick={submitData}>Login</button>
                                <button className="btn btn-danger" onClick={() => navigate("/")} style={{ marginLeft: "10px" }}>Cancel</button>
                            </div>
                        </form>
                        <a href="/forgotpassword">Forgot password</a>
                        <p className="text-danger">{data.loginerror}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;