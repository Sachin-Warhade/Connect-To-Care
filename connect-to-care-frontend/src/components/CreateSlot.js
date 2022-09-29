import { data } from "jquery";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function CreateSlot() {
    const [doctor, setDoctorId] = useState("");
    const [timetable, setTimetable] = useState({
        slotId: 0,
        doctor_id: {},
        weekday: "",
        startTime: "",
        endTime: "",
        slotDuration: "",
        breakTime: ""
    })

    // useEffect(() => {
    //     const tt = JSON.parse(sessionStorage.getItem("doctor"));
    //     setDoctorId(tt.doctorId)
    // }, []);

    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.removeItem("doctor");
        navigate("/");
    }

    const changeHandler = (e) => {
        setTimetable((data) => ({
            ...data,
            [e.target.name]: e.target.value
        }));
        console.log(e.target.name + " " + e.target.value)
    }
    const refreshPage = (e) => {
        window.location.reload();
    };


    const submitData = (e) => {
        e.preventDefault();
        const tempDoctor = JSON.parse(sessionStorage.getItem("doctor"));
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                slotId: timetable.slotId,
                doctor_id: tempDoctor,
                weekday: timetable.weekday,
                startTime: timetable.startTime,
                endTime: timetable.endTime,
                slotDuration: timetable.slotDuration,
                breakTime: timetable.breakTime
            })
        }
        fetch("http://localhost:8080/saveslot", reqOptions)
            .then(resp => resp.text())
            .then(data => {
                if (data.length != 0) {
                    alert("Slot created successfully!!!");
                    sessionStorage.removeItem("daytimetable")
                    navigate('/createslot');
                }
                else {
                    alert("Failed!!!");
                    window.location.reload();

                }
            })

    }

    return (
        <div className="container fluid" style={{ marginBottom: "50px" }}>
            <div style={{ marginBottom: "50px", marginTop: "80px" }}>
                <button className="btn btn-danger" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
                <button className='btn btn-secondary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/doctor")}>Go Back</button>
            </div>
            <br /><br />
            <h2>Create Slot</h2>
            <form method="POST">

                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>  Weekday: </b></label>
                    <input type="text" placeholder="Enter Day" name="weekday" className="form-control"
                        value={timetable.weekday} onChange={changeHandler} />
                </div>
                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>  Start Time: </b></label>
                    <input type="text" placeholder="Enter start time" name="startTime" className="form-control"
                        value={timetable.startTime} onChange={changeHandler} />
                </div >
                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>  End Time: </b></label>
                    <input type="text" placeholder="Enter end time" name="endTime" className="form-control"
                        value={timetable.endTime} onChange={changeHandler} />
                </div >
                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>  Slot Duration: </b></label>
                    <input type="text" placeholder="Enter slot duration" name="slotDuration" className="form-control"
                        value={timetable.slotDuration} onChange={changeHandler} />
                </div >
                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>  Break Time: </b></label>
                    <input type="text" placeholder="Enter break time" name="breakTime" className="form-control"
                        value={timetable.breakTime} onChange={changeHandler} />
                </div >



                <div style={{ marginTop: "10px" }}>
                    <button className="btn btn-success" onClick={submitData}>Create</button>
                    <button type="button" className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={refreshPage}>Reset</button>
                    <button className="btn btn-danger" onClick={() => navigate("/doctor")} style={{ marginLeft: "10px" }}>Cancel</button>


                </div>

            </form>
        </div>
    );
}
export default CreateSlot;