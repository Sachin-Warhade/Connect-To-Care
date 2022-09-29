import React, { useState, useEffect } from 'react';

const ViewHealthTimeline = () => {

    const [timelines, setTimelines] = useState([]);

    let patient = JSON.parse(sessionStorage.getItem("patient"));
    const p_Id = patient.patient_id;

    useEffect(() => {
        fetch("http://localhost:8080/healthtimelinebypatient/" + p_Id)
            .then(r => r.json())
            .then(d => setTimelines(d));
        console.log(timelines);
    }, []);

    return (
        <div className='container' style={{ marginBottom: "50px", marginTop: "60px" }} >
            <h2 className='text-ceter'>Health Timelines</h2>
            <table className='table table-bordered table-striped'>
                <thead className='bg-dark text-light'>
                    <tr>
                        <th>Date</th>
                        <th>Symptoms</th>
                        <th>Advice</th>
                        <th>Medicines</th>
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        timelines.map(
                            healthtimeline =>
                                <tr key={healthtimeline.id}>
                                    <td>{healthtimeline.date}</td>
                                    <td>{healthtimeline.symptoms}</td>
                                    <td>{healthtimeline.advice}</td>
                                    <td>{healthtimeline.medicines}</td>
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