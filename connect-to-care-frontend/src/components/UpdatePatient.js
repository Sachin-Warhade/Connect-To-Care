import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';


function UpdatePatient(){

    const navigate = useNavigate();
    const [city,setCity]=useState([]);
    const [area,setArea]=useState([]);
    const [data,setData] = useState({
        patientId:"",
        username:"",
        firstName:"",
        lastName:"",
        mobileNumber:"",
        gender:"",
        dob:"",
        blood_group:"",
        login_id:"",
        areaId:"",
        state:[]
    });

    
    const [Error,setError] = useState({

        user_name_error:"",
        first_name_error:"",
        last_name_error:"",
        mobile_number_error:"",
        location_error:"",
        areaId_error:""
    });

    const [flag,setFlag]=useState({
        username:true,
        firstName:true,
        lastName:true,
        mobileNumber:true,
        location:true,
        areaId:true,
    });

    const validateUserName=(e)=>{
        let name = e.target.value;
        if(name === ""){
            setError({...Error, user_name_error:"Please enter UserName"});
            setFlag({...flag,username:false});

        }
        else{
            setError({...Error, user_name_error:""});
            setFlag({...flag,username:true});

        }
    }

    const validateFirstName=(e)=>{
        let name = e.target.value;
        if(name === ""){
            setError({...Error,first_name_error:"Please enter First Name"});
            setFlag({...flag,firstName:false});

        }
        else{
            setError({...Error,first_name_error:""});
            setFlag({...flag,firstName:true});

        }
    }
    const validateLastName=(e)=>{
        let name = e.target.value;
        if(name === ""){
            setError({...Error,last_name_error:"Please enter Last Name"});
            setFlag({...flag,lastName:false});
            console.log(flag.lastName);

        }
        else{
            setError({...Error,last_name_error:""});
            setFlag({...flag,lastName:true});
            console.log(flag.lastName);

        }
    }
    const validateMobileNumber=(e)=>{
        let mobileNumber = e.target.value;
        let mnRegex = new RegExp(  /^[0-9]{10}$/);
        if(mnRegex.test(mobileNumber) === true){
            setError({...Error,mobile_number_error:""});
            setFlag({...flag,mobileNumber:true});

        }
        else{
            setError({...Error,mobile_number_error:"Mobile Number should be 10 digits without +91 or 0"});
            setFlag({...flag,mobileNumber:false});

        }
    }

    const validateLocation=(e)=>{
        let location = e.target.value;
        if(location === ""){
            setError({...Error,location_error:"Please enter House Number"});
            setFlag({...flag,location:false});

        }
        else{
            setError({...Error,location_error:""});
            setFlag({...flag,location:true});

        }
    }

    const validateArea=(e)=>{
        let area = e.target.value;
        if(area === ""){
            setError({...Error,areaId_error:"Please enter area"});
            setFlag({...flag,areaId:false});

        }
        else{
            setError({...Error,areaId_error:""});
            setFlag({...flag,areaId:true});

        }
    }

    const changeHandler = (e) => {
        setData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
        console.log(e.target.value)
    }

    const refreshPage = (e) => {
        window.location.reload();
      };

      const cityFetch=(e)=>{
        const val=e.target.value;
        console.log(val);
      fetch("http://localhost:8080/getcitybystate/"+val)
      .then(r => r.json())
      .then(d => setCity(d));
      console.log(city);
      }

      const areaFetch=(e)=>{
        const val=e.target.value;
      fetch("http://localhost:8080/areabycity/"+val)
      .then(r => r.json())
      .then(d => setArea(d))
      console.log(area)
      }

    const logout=()=>{
        sessionStorage.removeItem("patient");
        navigate("/");
    }
 
    /*
    useEffect(() => {
        let patient= JSON.parse(sessionStorage.getItem("patient"));
        setData({patientId:patient.patient_id,firstName:patient.firstName,lastName:patient.lastName,
            gender:patient.gender,dob:patient.dob,mobileNumber:patient.mobileNumber,blood_group:patient.blood_group,login_id:patient.login_id})
    },[]);
    */

    
      const submitData=(e)=>{
        e.preventDefault();
        //console.log(flag.firstName+" "+flag.lastName+" "+flag.mobileNumber)
        if(flag.firstName&&flag.lastName&&flag.mobileNumber){
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                patient_id:data.patientId,
                firstName:data.firstName,
                lastName:data.lastName,
                mobileNumber:data.mobileNumber,
                gender:data.gender,
                dob:data.dob,
                blood_group:data.blood_group,
                login_id:data.login_id,
                location:data.location,
                areaId:data.areaId
            })
        }
        fetch("http://localhost:8080/updatepatient",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
            {
                const json = JSON.parse(data);
                alert("update successful!!!");
                sessionStorage.setItem("patient",JSON.stringify(json))
                navigate('/patient');
            }
            else{
                alert("Failed!!!");
                window.location.reload();
            }
        })
        }
        else{
            alert("All fields are compulsory and must follow guidelines");
            // window.location.reload();
            navigate('/updatepatient');
        }

    }
    
    return(
        <div className="container fluid">

        <img src="Images/UDBACK.jpg" className="login" alt=""></img>

        <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button> 
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/patient")}>Go Back</button>
    <br/><br/>
    <div className = "container">
    <div className = "row">
        <div className = "card col-md-6 offset-md-3 offset-md-3"
                                    style={{
                                    right: "400px",
                                    top: "80px",
                                    backgroundColor: "transparent" }}>
        <h2 className='text-center'>Update Information </h2>

         <form method="POST">

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Username: </b></label>
                <input type="text" placeholder={data.username} name="username" className="form-control" 
                    value={data.username} onChange={changeHandler} onBlur={validateUserName}/>
                    <span className="text text-danger">{Error.user_name_error}</span>
            </div>

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  First Name: </b></label>
                <input type="text" placeholder={data.firstName} name="firstName" className="form-control" 
                    value={data.firstName} onChange={changeHandler} onBlur={validateFirstName}/>
                    <span className="text text-danger">{Error.first_name_error}</span>
            </div>
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Last Name: </b></label>
                <input type="text" placeholder={data.lastName} name="lastName" className="form-control" 
                    value={data.lastName} onChange={changeHandler} onBlur={validateLastName}/>
                    <span className="text text-danger">{Error.last_name_error}</span>
            </div >
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Mobile Number: </b></label>
                <input type="text" placeholder={data.mobileNumber} name="mobileNumber" className="form-control" 
                    value={data.mobileNumber} onChange={changeHandler} onBlur={validateMobileNumber}/>
                    <span className="text text-danger">{Error.mobile_number_error}</span>
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

            <div style={{ marginTop: '10px' }} className = "form-group" onChange={changeHandler}>
                <label><b>  Gender: </b></label> 
                <input style={{ marginLeft: '10px' }} type="radio" value="Male" name="gender" checked={data.gender==='Male'} disabled/> Male
                <input style={{ marginLeft: '10px' }} type="radio" value="Female" name="gender" checked={data.gender==='Female'} disabled/> Female
                <input style={{ marginLeft: '10px' }} type="radio" value="Other" name="gender" checked={data.gender==='Other'} disabled/> Other
            </div> 

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Date of Birth: </b></label>
                <input type="date" placeholder={data.dob} name="dob" className="form-control" 
                    value={data.dob} onChange={changeHandler} disabled/>
            </div >

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Blood Group: </b></label>
                <input type="text" placeholder={data.blood_group} name="graduation" className="form-control" 
                    value={data.blood_group} onChange={changeHandler} disabled={true}/>
            </div >

            <div style={{ marginTop: '10px' }} className = "form-group">
            <label><b>  Area: </b></label>
                {/* <input type="text" placeholder="Enter Area Id" name="areaId" className="form-control" 
                    value={data.areaId} onChange={changeHandler}/> */}
                    
                     <select style={{ marginLeft: '10px' }} name="state" onChange={cityFetch}>
                        <option value="0" >--state--</option>
                        <option value="1" >MAHARASHTRA</option>
                        <option value="2" >TELANGANA</option>
                        <option value="3" >AP</option>
                        <option value="4" >MP</option>
                        <option value="5" >GUJRAT</option>
                        {
                            data.state.map((v)=>{
                            return (
                                <option key={v.stateId} value={v.stateId} >{v.stateName}</option>
                            )})
                        }
                    </select>
                    
                   <select style={{ marginLeft: '10px' }} name="city" onChange={areaFetch}>
                        <option value="0" >--city--</option>
                         {
                            city.map((v)=>{
                            return (
                                <option key={v.cityId} value={v.cityId} >{v.cityName}</option>
                            )})
                        } 
                    </select>

                     <select style={{ marginLeft: '10px' }} name="areaId" value={data.areaId} onChange={changeHandler} onBlur={validateArea}>
                        <option value="">--area--</option>
                        {
                            area.map((v)=>{
                            return (
                                <option key={v.areaId} value={v.areaId} >{v.areaName}</option>
                            )})
                        }
                    </select>
                    <span className="text text-danger">{Error.areaId_error}</span> 
            </div><br/>


            <div style={{marginTop: "10px",marginBottom: "10px"}}>
            <button className="btn btn-success" onClick={submitData}>Update</button>
            <button type="button" className="btn btn-danger" style={{marginLeft: "10px"}} onClick={refreshPage}>Reset</button>
            <button className="btn btn-danger" onClick={() => navigate("/patient")} style={{marginLeft: "10px"}}>Cancel</button>

            </div>

</form>

        </div>
        </div>
</div>
    </div>
    );

}
export default UpdatePatient;

