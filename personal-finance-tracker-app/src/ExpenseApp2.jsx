import './ExpenseApp.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ExpenseApp() {
    const [formData, setFormData] = useState({ entry: 'income', detail: '' });
    const [status, setStatus] = useState(null);
    const [submittedData, setSubmittedData] = useState(null);
    const [serverResponse, setServerResponse] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Sending...');

        try {
            const response = await axios.post('http://localhost:8080/submit-form', formData);
            console.log('Success:', response.data);
            setStatus('Data sent');
            setSubmittedData(formData);
            setServerResponse(response.data);
        } catch (error) {
            console.log('Error submitting data:', error);
            setStatus('submission failed');
            setSubmittedData(null);
        }
    };

    return (
        <>

            <div className="head">
                <h1>Refactored expense app</h1>
            </div>

            <div className="main-layout">

                {/* create an add button here */}
                <form onSubmit={handleSubmit}>
                    <label for="entry">Select entry type:</label>
                    <select
                        id="entry"
                        name="entry"
                        value={formData.entry}
                        onChange={handleChange}
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>

                    <label for="detail">Detail:</label>
                    <input type="text" id="detail" name="detail"
                        value={formData.detail}
                        onChange={handleChange}
                        required />

                    <button type="submit">Submit</button>
                </form>

            </div>

            <div>
                {status ? <p>Updated status: {status}</p> : <p>'Nothing done yet'</p>}
                {submittedData ? <p>Data submitted: {JSON.stringify(submittedData)}</p> : <p>'No data submitted yet'</p>}
                {serverResponse ? <p> Response from server: {serverResponse} </p> : <p>'No response from server yet'</p>}
            </div>

            {/* <div className="main-layout">
                <div className="expense">
                    <ul>
                        {array.map((fruit, index) => {
                            return <li key={index}>{fruit}</li>;
                        })}
                    </ul>
                </div>
            </div> */}

        </>
    )
}