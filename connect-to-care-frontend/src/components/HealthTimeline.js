import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function HealthTimeline(){
    const navigate = useNavigate();
    const [data,setData] = useState({
        date:"",
        symptoms:"",
        medicine:"",
        advice:"",
        remark:""
    });

    const [Error,setError] = useState({
        date_error:"",
        symptoms_error:"",
        medicine_error:"",
        advice_error:"",
        remark_error:"",
    });

    const [flag,setFlag]=useState({
        date:false,
        symptoms:false,
        medicine:false,
        advice:false,
        remark:false,
    });

    const validatedate=(e)=>{
        let date = e.target.value;
        if(date === ""){
            setError({...Error,date_error:"Please enter date"});
            setFlag({...flag,date:false});

        }
        else{
            setError({...Error,date_error:""});
            setFlag({...flag,date:true});

        }
    }

    const validatesymptoms=(e)=>{
        let symp = e.target.value;
        if(symp === ""){
            setError({...Error,symptoms_error:"Please enter symptoms"});
            setFlag({...flag,symptoms:false});

        }
        else{
            setError({...Error,symptoms_error:""});
            setFlag({...flag,symptoms:true});

        }
    }

    const validatemedicine=(e)=>{
        let med = e.target.value;
        if(med === ""){
            setError({...Error,medicine_error:"Please enter medicine"});
            setFlag({...flag,medicine:false});

        }
        else{
            setError({...Error,medicine_error:""});
            setFlag({...flag,medicine:true});

        }
    }

    const validateadvice=(e)=>{
        let advi = e.target.value;
        if(advi === ""){
            setError({...Error,advice_error:"Please enter advice"});
            setFlag({...flag,advice:false});

        }
        else{
            setError({...Error,advice_error:""});
            setFlag({...flag,advice:true});

        }
    }

    const validateremark=(e)=>{
        let remark = e.target.value;
        if(remark === ""){
            setError({...Error,remark_error:"Please enter remark"});
            setFlag({...flag,remark:false});

        }
        else{
            setError({...Error,remark_error:""});
            setFlag({...flag,remark:true});

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
        window.remark.reload();
      };

    const logout=()=>{
        sessionStorage.removeItem("admin");
        navigate("/");
    }

    
      const submitData=(e)=>{
        // console.log(data);
        e.preventDefault();
        // console.log(flag.userName+" "+flag.password+" "+flag.firstName+" "+flag.lastName+" "+flag.mobileNumber+" "+flag.date+" "+" "+flag.symptoms+" "+flag.advice
        // +" "+flag.fees+" "+flag.areaId);
        if(flag.date&&flag.symptoms&&flag.advice&&flag.remark){
            const reqOptions ={
                method : 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body : JSON.stringify({
                    date:data.date,
                    symptoms:data.symptoms,
                    advice:data.advice,
                    medicine:data.medicine,
                    remark:data.remark
                })
            }
            fetch("http://localhost:8080/savehealthtimeline",reqOptions)
            .then(resp=>resp.text())
            .then(data=> {if(data.length !== 0)
                {
                    alert("Health Timeline added successfully!!!");
                    navigate('/doctor');
                }
                else{
                    alert("Failed!!!");
                    navigate('/healthtimeline');
                    //window.remark.reload();
                }
            })
        }
        else{
            alert("All fields are compulsory and must follow guidelines");
                // window.remark.reload();
                navigate('/healthtimeline');
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
                        <h2 className='text-center'>Add Health Timeline </h2>

                        <form method="POST">
                            <div style={{ marginTop: '10px' }} className = "form-group">
                                <label><b>  Date: </b></label>
                                <input type="date" placeholder="date Of Birth" name="date" className="form-control" 
                                    value={data.date} onChange={changeHandler} onBlur={validatedate}/>
                                <span className="text text-danger">{Error.date_error}</span>
                            </div >

                            <div style={{ marginTop: '10px' }} className = "form-group">
                                <label><b>  Symptoms: </b></label>
                                <textarea placeholder="Enter symptoms Degree name" name="symptoms" className="form-control" 
                                    value={data.symptoms} onChange={changeHandler} onBlur={validatesymptoms}/>
                                <span className="text text-danger">{Error.symptoms_error}</span>
                            </div >

                            <div style={{ marginTop: '10px' }} className = "form-group">
                                <label><b> Medicine: </b></label>
                                <textarea placeholder="Enter Medicines" name="medicine" className="form-control" 
                                    value={data.medicine} onChange={changeHandler} onBlur={validatemedicine}/>
                                <span className="text text-danger">{Error.medicine_error}</span>
                            </div >

                            <div style={{ marginTop: '10px' }} className = "form-group">
                                <label><b>  Advice: </b></label>
                                <textarea placeholder="advice" name="advice" className="form-control" 
                                    value={data.advice} onChange={changeHandler} onBlur={validateadvice}/>
                                <span className="text text-danger">{Error.advice_error}</span> 
                            </div >

                            <div style={{ marginTop: '10px' }} className = "form-group">
                                <label><b>  Remark: </b></label>
                                <textarea placeholder="Enter House Number" name="remark" className="form-control" 
                                value={data.remark} onChange={changeHandler} onBlur={validateremark}/>
                                <span className="text text-danger">{Error.remark_error}</span>
                            </div >

                            <div style={{marginTop: "10px"}}>
                                <button className="btn btn-success" onClick={submitData}>Save</button>
                                <button type="button" className="btn btn-danger" style={{marginLeft: "10px"}} onClick={refreshPage}>Reset</button>
                                <button className="btn btn-danger" onClick={() => navigate("/hospital")} style={{marginLeft: "10px"}}>Cancel</button> 
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default HealthTimeline;

