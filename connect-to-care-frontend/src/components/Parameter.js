import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Parameter() {


  const [data, setData] = useState({
    height: "",
    weight: "",
    bmi: "",
    hb: "",
    blood_pressure: "",
    blood_sugar: "",
    blood_group: "",
    patient_id: ""
  });

  const [Error, setError] = useState({
    height_error: "",
    weight_error: "",
    bmi_error: "",
    hb_error: "",
    blood_pressure_error: "",
    blood_sugar_error: "",
    blood_group_error: ""
  });

  const [flag, setFlag] = useState({
    height: false,
    weight: false,
    bmi: false,
    hb: false,
    blood_pressure: false,
    blood_sugar: false,
    blood_group: false,
  });

  const validateweight = (e) => {
    let pass = e.target.value;
    let passRegex = new RegExp();
    if (passRegex.test(pass) === true) {
      setError({ ...Error, weight_error: "" });
      setFlag({ ...flag, weight: true });
    } else {
      setError({
        ...Error,
        weight_error:
          "weight must be alphanumeric and should contains at least a special character with min length 8 and max length 16",
      });
      setFlag({ ...flag, weight: false });
    }
  };

  const validateBloodGroup = (e) => {
    let bg = e.target.value;
    if (bg === "") {
      setError({ ...Error, blood_group_error: "Please select Blood Group" });
      setFlag({ ...flag, bloodGroup: false });
    } else {
      setError({ ...Error, blood_group_error: "" });
      setFlag({ ...flag, bloodGroup: true });
    }
  };
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  let pa = JSON.parse(sessionStorage.getItem("patient"));
  const patientId = pa.patient_id;

  const submitData = (e) => {
    e.preventDefault();
    //console.log(flag.userName+" "+flag.weight+" "+flag.firstName+" "+flag.lastName+" "+flag.mobileNumber+" "+flag.dob+" "+flag.bloodGroup);
    if (flag.weight) {
      const reqOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patient_id: patientId,
          height: data.height,
          weight: data.weight,
          bmi: data.bmi,
          hb: data.hb,
          blood_pressure: data.blood_pressure,
          blood_sugar: data.blood_sugar,
          blood_group: data.blood_group
        }),
      };
      fetch("http://localhost:8080/saveparameter", reqOptions)
        .then((resp) => resp.text())
        .then((data) => {
          if (data.length != 0) {
            alert("Parameter Added successful!!!");
            navigate("/patient");
          } else {
            alert("Failed!!!");
            navigate("/parameter");
          }
        });
    }
    else {
      alert("All fields are compulsory and must follow guidelines");
      // window.location.reload();
      navigate("/parameter");
    }
  };

  return (
    <div>

      <img src="" className="login" alt=""></img>

      <br />
      <br />
      <div className="container" style={{ marginBottom: "120px" }}>
        <div className="row my-4">
          <div className="card col-md-6 offset-md-3 offset-md-1"
            style={{
              right: "380px",
              top: "50px",
              backgroundColor: "transparent"
            }}>
            <h2 className="text-center">Parameters </h2>

            <form method="POST">
              <div className="form-group">
                <label>
                  <b> Height: </b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Height"
                  name="height"
                  className="form-control"
                  value={data.height}
                  onChange={changeHandler}
                />
                <span className="text text-danger">
                  {Error.height_error}
                </span>
              </div>
              <div style={{ marginTop: "10px" }} className="form-group">
                <label>
                  <b> Weight: </b>
                </label>
                <input
                  type="weight"
                  placeholder="Weight"
                  name="weight"
                  className="form-control"
                  value={data.weight}
                  onChange={changeHandler}
                  onBlur={validateweight}
                />
                <span className="text text-danger">{Error.weight_error}</span>
              </div>
              <div style={{ marginTop: "10px" }} className="form-group">
                <label>
                  <b> BMI: </b>
                </label>
                <input
                  type="text"
                  placeholder="BMI"
                  name="bmi"
                  className="form-control"
                  value={data.bmi}
                  onChange={changeHandler}
                />
                <span className="text text-danger">
                  {Error.bmi_error}
                </span>
              </div>
              <div style={{ marginTop: "10px" }} className="form-group">
                <label>
                  <b> hb: </b>
                </label>
                <input
                  type="text"
                  placeholder="hb"
                  name="hb"
                  className="form-control"
                  value={data.hb}
                  onChange={changeHandler}
                />
                <span className="text text-danger">
                  {Error.hb_error}
                </span>
              </div>

              <div
                style={{ marginTop: "10px" }}
                className="form-group"
                onChange={changeHandler}
              >
                <label>
                  <b> Blood Pressure: </b>
                </label>
                <input
                  type="text"
                  placeholder="Blood Pressure "
                  name="blood_pressure"
                  className="form-control"
                  value={data.blood_pressure}
                  onChange={changeHandler}
                />
                <span className="text text-danger">
                  {Error.blood_pressure_error}
                </span>
                <label>
                  <b> Blood Sugar: </b>
                </label>
                <input
                  type="text"
                  placeholder="Blood Sugar"
                  name="blood_sugar"
                  className="form-control"
                  value={data.blood_sugar}
                  onChange={changeHandler}
                />
                <span className="text text-danger">{Error.blood_sugar_error}</span>
              </div>
              <div style={{ marginTop: "10px" }} className="form-group">
                <label>
                  <b> Blood Group: </b>
                </label>
                <select
                  style={{ marginLeft: "10px" }}
                  value={data.blood_group}
                  name="blood_group"
                  onChange={changeHandler}
                  onBlur={validateBloodGroup}
                >
                  <option value="">Select</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="O+">O+</option>
                  <option value="AB+">AB+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="O-">O-</option>
                  <option value="AB-">AB-</option>
                </select>
                <span className="text text-danger">
                  {Error.blood_group_error}
                </span>
              </div>

              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  justifyContent: "center",
                  flex: "center",
                }}
              >
                <button className="btn btn-primary" onClick={submitData}> Save Parameter </button>
                <button className="btn btn-danger" onClick={() => navigate("/Patient")} style={{ marginLeft: "10px" }}> Cancel </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parameter;