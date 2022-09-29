import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';

function ForgotPassword() {

    const [value, setValue] = useState({
        username: "",
        password: ""
    });

    const [Error, setError] = useState({
        user_name_error: "",
        password_error: "",
    });

    const [flag, setFlag] = useState({
        userName: false,
        password: false,
    });


    const changeHandler = (e) => {
        setValue((value) => ({
            ...value,
            [e.target.name]: e.target.value
        }));
    }

    const navigate = useNavigate();

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

    // const forgotPassword = () => {
    //     fetch("http://localhost:8080/user" + )
    // }

    const submitvalue = (e) => {
        e.preventDefault();
        if (value.username == '') {
            alert('Username cannot be null');
            return;
        }

        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlenxoded'
            },
        }
        fetch("http://localhost:8080/changepassword?username=" + value.username + "&password=" + value.password, reqOptions)
            .then(resp => resp.text())
            .then(value => {
                if (value.length != 0) {
                    alert("Password Changed successfully");
                    navigate("/login");
                }
                else {
                    alert("Please try again");
                    navigate("/forgotpassword");
                }
            })
    }


    return (
        <div>
            <img src="" className="login" alt=""></img>

            <br /><br />
            <div className="container justify-content-right">
                <div className="row " >
                    <div className="card col-md-6 offset-md-3 offset-md-3"
                        style={{
                            right: "350px",
                            top: "140px",
                            backgroundColor: "transparent"
                        }}>
                        <h2 className='text-center'><b> Change Password </b></h2> <br />

                        <form >
                            <div className="form-group">
                                <label><b> Enter your registered UserName: </b></label>
                                <input type="email" placeholder="Enter UserName" name="username" className="form-control"
                                    value={value.username} onChange={changeHandler} />
                            </div>  <br />

                            <div className="form-group">
                                <label><b> Enter New Password: </b></label>
                                <input type="password" placeholder="Enter New Password" name="password" className="form-control"
                                    value={value.password} onChange={changeHandler} onBlur={validatePassword} />
                                <span className="text text-danger">{Error.password_error}</span>
                            </div>  <br />

                            <div style={{ marginTop: "10px", marginLeft: "100px", marginBottom: "10px" }}>
                                <button className="btn btn-success" onClick={submitvalue}>Change Password</button>
                                <button className="btn btn-danger" onClick={() => navigate("/login")} style={{ marginLeft: "10px" }}>Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div >

    );
}
export default ForgotPassword;