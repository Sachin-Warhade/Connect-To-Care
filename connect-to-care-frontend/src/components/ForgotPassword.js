import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';

function ForgotPassword(){

    const [data,setData] = useState({
        username:"",
        password:"",
        repassword:"",
    });

    const [Error,setError] = useState({
        user_name_error:"",
        password_error:"",
        repassword_error:"",
    });

    const [flag,setFlag]=useState({
        userName:false,
        password:false,
        repassword:false,
    });


    const changeHandler = (e) => {
        setData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
    }

    const navigate = useNavigate();

    const validatePassword=(e)=> {
        let pass = e.target.value;
        let passRegex = new RegExp(  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,16}$/);
        if(passRegex.test(pass) === true) {
            setError({...Error,password_error:""});
            setFlag({...flag,password:true});

        }
        else {
           setError({...Error,password_error: "Password must be alphanumeric and should contains at least a special character with min length 8 and max length 16"});
           setFlag({...flag,password:false});

        }
    }

    const validateRePassword=()=> {
        let pass = document.getElementsByName("repassword").value;
        let password = document.getElementsByName("password").value;
        if(password !== pass) {
            setError({...Error,repassword_error: "ReEntered Password must be same as New Password"});
            setFlag({...flag,repassword:false});
        }
        else {
            setError({...Error,repassword_error:""});
            setFlag({...flag,repassword:true});

        }
    }

    const submitData=(e)=>{
        e.preventDefault();
        if(data.username == '') {
            alert('Username cannot be null');
            return;
        }
       
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                user_name: data.username,
            })
        }
        fetch("http://localhost:8080/forgotpassword",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
            {
                alert("Password successfully Changed");
                navigate("/login");
            }
            else{
                alert("Correct Re-Entered Password.. Please try again");
                navigate("/forgotpassword");
            }
        })
    }

    
    return (
        <div>
            <img src="Images/FPBACK.jpg" className="login" alt=""></img>

            <br/><br/>
            <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3"  
                                    style={{
                                    right: "450px",
                                    top: "227px",
                                    backgroundColor: "transparent" }}>
                <h2 className='text-center'><b> Change Password By UserName </b></h2> <br/>

                <form >
                    <div className = "form-group">
                        <label><b> Enter your registered UserName: </b></label>
                        <input type="email" placeholder="Enter UserName" name="username" className="form-control" 
                            value={data.username} onChange={changeHandler}/>                            
                    </div>  <br/>

                    <div className = "form-group">
                        <label><b> Enter New Password: </b></label>
                        <input type="password" placeholder="Enter New Password" name="password" className="form-control" 
                            value={data.password} onChange={changeHandler} onBlur={validatePassword}/>      
                            <span className="text text-danger">{Error.password_error}</span>                      
                    </div>  <br/>

                    <div className = "form-group">
                        <label><b> Re-Enter New Password: </b></label>
                        <input type="password" placeholder="Re-Enter New Password" name="repassword" className="form-control" 
                            value={data.repassword} onChange={changeHandler} onBlur={validateRePassword}/>     
                            <span className="text text-danger">{Error.repassword_error}</span>                       
                    </div><br/>

                    <div style={{marginTop: "10px", marginLeft:"200px", marginBottom:"10px"}}>
                    <button className="btn btn-success" onClick={submitData}>Change Password</button>
                    <button className="btn btn-danger" onClick={() => navigate("/login")} style={{marginLeft: "10px"}}>Cancel</button> 
                    </div>

                </form>
                </div>
                </div>
             </div>
        </div>

);
}
export default ForgotPassword;