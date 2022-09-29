import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Searchhospital() {

  const [hospital, setHospital] = useState([]);
  const [city, setCity] = useState([]);
  const [area, setArea] = useState([]);
  const [state, setState] = useState([]);
  const [stateId, setStateId] = useState("");
  const [cityId, setCityId] = useState("");
  const [areaId, setAreaId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/allstates")
      .then((r) => r.json())
      .then((d) => setState(d));
  }, []);

  const changeHandler = (e) => {
    setAreaId(e.target.value);
    // console.log(e.target.name+" "+e.target.value)
  };

  const refreshPage = (e) => {
    window.location.reload();
  };

  const cityFetch = (e) => {
    setStateId(e.target.value);
    // console.log(stateId);
    const val = e.target.value;
    fetch("http://localhost:8080/getcitybystate/" + val)
      .then((r) => r.json())
      .then((d) => setCity(d));
  };

  const areaFetch = (e) => {
    setCityId(e.target.value);
    // console.log(cityId);
    const val = e.target.value;
    fetch("http://localhost:8080/areabycity/" + val)
      .then((r) => r.json())
      .then((d) => setArea(d));
  };

  const search = (ev) => {
    setHospital([]);

    if (stateId === "" && cityId === "" && areaId === "") {
      setError("Please Select State and City and Area");
    } else if (
      (stateId !== "" && cityId !== "" && areaId !== "" && specId == "") ||
      specId == 0
    ) {
      setError("");
      fetch("http://localhost:8080/allhospitalsbyarea/" + areaId)
        .then((r) => r.json())
        .then((d) => setHospital(d));
    } else if (
      stateId !== "" &&
      cityId !== "" &&
      areaId !== "" &&
      specId != ""
    ) {
      setError("");
      fetch(
        "http://localhost:8080/hospitalsbyareaandspec/" + areaId + "/" + specId
      )
        .then((r) => r.json())
        .then((d) => setHospital(d));
      // console.log("hii"+specId)
    }
  };
  const [speciality, setSpeciality] = useState([]);
  const fetchSpeciality = () => {
    console.log("hiii");
    fetch("http://localhost:8080/hospitalspeciality")
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setSpeciality(d);
      });
  };
  const [specId, setSpecId] = useState("");

  const setSpec = (ev) => {
    setSpecId(ev.target.value);
  };

  // const appointment = (ev) => {
  //   sessionStorage.setItem("doctor", JSON.stringify(ev));
  //   navigate("/bookappointment");
  // };

  return (
    <>
      <div className="container my-4" style={{ marginBottom: "50px" }}>
        <br></br>

        <div>
          <h1 className="font-weight-bold">Search Hospital</h1>

          <div style={{ marginTop: "10px" }} className="form-group">
            <label>
              <b> Select Area: </b>
            </label>

            <select
              style={{ marginLeft: "10px" }}
              name="state"
              onChange={cityFetch}
            >
              <option value="">--State--</option>

              {state.map((v) => {
                return (
                  <option key={v.stateId} value={v.stateId}>
                    {v.stateName}
                  </option>
                );
              })}
            </select>

            <select
              style={{ marginLeft: "10px" }}
              name="city"
              onChange={areaFetch}
            >
              <option value="">--City--</option>

              {city.map((v) => {
                return (
                  <option key={v.cityId} value={v.cityId}>
                    {v.cityName}
                  </option>
                );
              })}
            </select>

            <select
              style={{ marginLeft: "10px" }}
              name="areaId"
              onChange={changeHandler}
              onBlur={fetchSpeciality}
            >
              <option value="">--Area--</option>
              {area.map((v) => {
                return (
                  <option key={v.areaId} value={v.areaId}>
                    {v.areaName}
                  </option>
                );
              })}
            </select>
            <select
              style={{ marginLeft: "10px", marginTop: "10px" }}
              name="areaId"
              onChange={setSpec}
            >
              <option value="0">--Speciality--</option>
              {speciality.map((v) => {
                return (
                  <option key={v} value={v}>
                    {v}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            className="btn btn-primary"
            style={{ marginLeft: "10px", marginTop: "10px" }}
            onClick={search}
          >
            Search
          </button>
          <button
            type="button"
            className="btn btn-danger"
            style={{ marginLeft: "10px", marginTop: "10px" }}
            onClick={refreshPage}
          >
            Reset
          </button>
          <button
            className="btn btn-danger"
            onClick={() => navigate("/patient")}
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            Cancel
          </button>
        </div>
        <div>
          <p className="text text-danger">
            <b>{error}</b>
          </p>
        </div>
      </div>
      <div className="container my-4">
        <div>
          <h3>Hospital List</h3>
          <table className="table table-bordered">
            <thead className="bg-dark text-light">
              <tr>
                <th>Hospital Id</th>
                <th>Hospital Name</th>
                <th>Speaciality</th>
                <th>Area Name</th>
                <th>City Name</th>
                <th>State Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {hospital.map((v) => {
                return (
                  <tr>
                    <td>{v.hospitalId}</td>
                    <td>{v.hospitalName}</td>
                    <td>{v.speciality}</td>
                    <td>{v.areaId.areaName}</td>
                    <td>{v.areaId.city_id.cityName}</td>
                    <td>{v.areaId.city_id.state_id.stateName}</td>
                    <td>
                      <button
                        className="btn btn-primary"

                        onClick={() => navigate("/doclist/" + v.hospitalId)}
                      >
                        Doctor List
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Searchhospital;
