import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function HospitalRegistration(){
    const navigate = useNavigate();
    const [city,setCity]=useState([]);
    const [area,setArea]=useState([]);
    const [data,setData] = useState({
        userName:"",
        password:"",
        hospitalName:"",
        contactNumber:"",
        speciality:"",
        location:"",
        areaId:"",
        state:[]
    });

    const [Error,setError] = useState({
        user_name_error:"",
        password_error:"",
        hospital_name_error:"",
        contact_number_error:"",
        speciality_error:"",
        location_error:"",
        areaId_error:""
    });

    const [flag,setFlag]=useState({
        userName:false,
        password:false,
        hospitalName:false,
        contactNumber:false,
        speciality:false,
        location:false,
        areaId:false,
    });

    const validateEmail=(e)=> {
        let email = e.target.value;
        let emailRegex = new RegExp( /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,4}$/);
        if(emailRegex.test(email) === true ) {
             setError({...Error,user_name_error:""});
             setFlag({...flag,userName:true});

        }
        else {
            setError({...Error,user_name_error: "Email format should be 'abc@gmail.com' and it can include (A-Z a-z 0-9 . _ -)"});
            setFlag({...flag,userName:false});

        }
    }

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

    const validateHospitalName=(e)=>{
        let name = e.target.value;
        if(name === ""){
            setError({...Error,hospital_name_error:"Please enter First Name"});
            setFlag({...flag,hospitalName:false});

        }
        else{
            setError({...Error,hospital_name_error:""});
            setFlag({...flag,hospitalName:true});

        }
    }
    
    const validateContactNumber=(e)=>{
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
    // const validateGenger=(e)=>{
    //     let gender = e.target.name;
    //     if(gender.checked){
    //         setError({...Error,gender_error:""});
    //     }
    //     else{
    //         setError({...Error,gender_error:"Gender must be selected"});
    //     }
    // }

    const validateSpeciality=(e)=>{
        let spec = e.target.value;
        if(spec === ""){
            setError({...Error,speciality_error:"Please enter Speciality"});
            setFlag({...flag,speciality:false});

        }
        else{
            setError({...Error,speciality_error:""});
            setFlag({...flag,speciality:true});

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

    // const [state,setState]=useState();
    const changeHandler = (e) => {
        setData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
        console.log(e.target.name+" "+e.target.value)
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
        sessionStorage.removeItem("admin");
        navigate("/");
    }
 
    useEffect(() => {   
        fetch("http://localhost:8080/allstates")
        .then(r => r.json())
        .then(d => setData({...data,state: d}))
        // console.log(data.state)
    },[]);

    
      const submitData=(e)=>{
        // console.log(data);
        e.preventDefault();
        // console.log(flag.userName+" "+flag.password+" "+flag.firstName+" "+flag.lastName+" "+flag.mobileNumber+" "+flag.dob+" "+" "+flag.graduation+" "+flag.speciality
        // +" "+flag.fees+" "+flag.areaId);
        if(flag.userName&&flag.password&&flag.firstName&&flag.lastName&&flag.mobileNumber&&flag.dob&&flag.graduation&&flag.speciality
            &&flag.fees&&flag.areaId){
            const reqOptions ={
                method : 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body : JSON.stringify({
                    userName: data.userName,
                    password: data.password,
                    hospitalName:data.hospitalName,
                    contactNumber:data.contactNumber,
                    speciality:data.speciality,
                    location:data.location,
                    areaId:data.areaId
                })
            }
            fetch("http://localhost:8080/savedoctor",reqOptions)
            .then(resp=>resp.text())
            .then(data=> {if(data.length !== 0)
                {
                    alert("New Hospital added successfully!!!");
                    navigate('/admin');
                }
                else{
                    alert("Failed!!!");
                    navigate('/hospitalregistration');
                    //window.location.reload();
                }
            })
        }
        else{
            alert("All fields are compulsory and must follow guidelines");
                // window.location.reload();
                navigate('/hospitalregistration');
        }

    }
    
    return(
        <div  className="container fluid" style={{marginBottom : "50px"}}>
        <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button>
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/admin")}>Go Back</button> 
    <br/><br/>
    <div className = "container">
    <div className = "row">
        <div className = "card col-md-6 offset-md-3 offset-md-3">
        <h2 className='text-center'>Hospital Registration </h2>

        <form method="POST">
            <div className = "form-group">
                <label><b> User Name: </b></label>
                <input type="text" placeholder="User Name" name="userName" className="form-control" 
                    value={data.userName} onChange={changeHandler} onBlur={validateEmail}/>
                    <span className="text text-danger">{Error.user_name_error}</span>
            </div>
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Password: </b></label>
                <input type="password" placeholder="Password" name="password" className="form-control" 
                    value={data.password} onChange={changeHandler} onBlur={validatePassword}/>
                    <span className="text text-danger">{Error.password_error}</span>
            </div >
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Hospital Name: </b></label>
                <input type="text" placeholder="Hospital Name" name="hospitalName" className="form-control" 
                    value={data.hospitalName} onChange={changeHandler} onBlur={validateHospitalName}/>
                    <span className="text text-danger">{Error.hospital_name_error}</span>
            </div>
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Contact Number: </b></label>
                <input type="text" placeholder="Hospital contactNumber" name="contactNumber" className="form-control" 
                    value={data.contactNumber} onChange={changeHandler} onBlur={validateContactNumber}/>
                    <span className="text text-danger">{Error.mobile_number_error}</span>
            </div>

            {/* <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Blood Group: </b></label>
                <select style={{ marginLeft: '10px' }} value={data.blood_group} name="blood_group" onChange={changeHandler}>
                    <option value="">Select</option>                           
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                </select>
              
            </div> */}

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Speciality: </b></label>
                <input type="text" placeholder="Speciality" name="speciality" className="form-control" 
                    value={data.speciality} onChange={changeHandler} onBlur={validateSpeciality}/>
                    <span className="text text-danger">{Error.speciality_error}</span> 
            </div >

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Location: </b></label>
                <input type="text" placeholder="Enter House Number" name="location" className="form-control" 
                    value={data.location} onChange={changeHandler} onBlur={validateLocation}/>
                    <span className="text text-danger">{Error.location_error}</span>
            </div >
            <div style={{ marginTop: '10px' }} className = "form-group">
            <label><b>  Area: </b></label>
                {/* <input type="text" placeholder="Enter Area Id" name="areaId" className="form-control" 
                    value={data.areaId} onChange={changeHandler}/> */}
                    
                     <select style={{ marginLeft: '10px' }} name="state" onChange={cityFetch}>
                        <option value="0" >--state--</option>
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
            </div>



            <div style={{marginTop: "10px"}}>
            <button className="btn btn-success" onClick={submitData}>Register</button>
            <button type="button" className="btn btn-danger" style={{marginLeft: "10px"}} onClick={refreshPage}>Reset</button>
            <button className="btn btn-danger" onClick={() => navigate("/admin")} style={{marginLeft: "10px"}}>Cancel</button> 
            <button className="btn btn-primary" onClick={() => navigate("/addarea")} style={{marginLeft: "10px"}}>Add Area</button> 

   
            </div>

</form>

        </div>
        </div>
</div>
    </div>
    );

}
export default HospitalRegistration;

