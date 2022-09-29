import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function UpdateParameter() {

  //const [parameter, setParameter] = useState([]);

  const [data, setData] = useState({
    parameterId: "",
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
    height: true,
    weight: true,
    bmi: true,
    hb: true,
    blood_pressure: true,
    blood_sugar: true,
    blood_group: true,
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
  const p_Id = pa.patient_id;

  useEffect(() => {
    fetch("http://localhost:8080/parameterbypatient/" + p_Id)
      .then(r => r.json())
      .then(d => setData(d));
    console.log(data);
  }, []);


  const submitData = (e) => {
    e.preventDefault();
    //console.log(flag.userName+" "+flag.weight+" "+flag.firstName+" "+flag.lastName+" "+flag.mobileNumber+" "+flag.dob+" "+flag.bloodGroup);
    if (
      flag.height
    ) {
      const reqOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parameterId: data.parameterId,
          height: data.height,
          weight: data.weight,
          bmi: data.bmi,
          hb: data.hb,
          blood_pressure: data.blood_pressure,
          blood_sugar: data.blood_sugar,
          blood_group: data.blood_group,
          patient_id: data.patient_id
        })
      }
      fetch("http://localhost:8080/updateparameter", reqOptions)
        .then((resp) => resp.text())
        .then((data) => {
          if (data.length != 0) {
            alert("Parameter Updated Successful!!!");
            navigate("/patient");
          } else {
            alert("Update Failed!!!");
            navigate("/updateparameter");
          }
        });
    } else {
      alert("All fields are compulsory and must follow guidelines");
      // window.location.reload();
      navigate("/updateparameter");
    }
  };

  return (
    <div>

      <img src="Images/PARABACK11.jpg" className="login" alt=""></img>

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
            <h2 className="text-center">Update Parameters </h2>

            <form method="POST">
              <div className="form-group">
                <label>
                  <b> Height: </b>
                </label>
                <input
                  type="text"
                  placeholder={data.height}
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
                  placeholder={data.weight}
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
                  placeholder={data.bmi}
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
                  placeholder={data.hb}
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
                  placeholder={data.blood_pressure}
                  name="bmi"
                  className="form-control"
                  value={data.bmi}
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
                  placeholder={data.blood_sugar}
                  name="bmi"
                  className="form-control"
                  value={data.bmi}
                  onChange={changeHandler}
                />
                <span className="text text-danger">{Error.blood_sugar_error}</span>
              </div>

              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  justifyContent: "center",
                  flex: "center",
                }}
              >
                <button className="btn btn-primary" onClick={submitData}> Save Updated Parameter </button>
                <button className="btn btn-danger" onClick={() => navigate("/Patient")} style={{ marginLeft: "10px" }}> Cancel </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateParameter;