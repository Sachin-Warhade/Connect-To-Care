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