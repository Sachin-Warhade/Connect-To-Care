import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const healthtimeline_url = 'http://localhost:8080/healthtimeline';

const ViewHealthTimeline = () => {

    const [timelines, setTimelines] = useState([]);

    useEffect(() => {
        fetch(healthtimeline_url)
        .then(r => r.json())
        .then(d => setTimelines(d));
        console.log(timelines);
    });

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">Connect To Care</NavLink>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link active" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/healthtimelinelist">healthtimeline List</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/hospitallist">Hospital List</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/doctorlist">Doctor List</NavLink></li>
                    </ul>
                </div>
            </nav>
            <h2 className='text-ceter'>Health Timelines</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Symptoms</th>
                        <th>Medicines</th>
                        <th>Advice</th>
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        timelines.map(
                            healthtimeline =>
                            <tr key = {healthtimeline.id}>
                                <td>{healthtimeline.date}</td>
                                <td>{healthtimeline.symptom}</td>
                                <td>{healthtimeline.medicine}</td>
                                <td>{healthtimeline.advice}</td>
                                <td>{healthtimeline.remark}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewHealthTimeline;