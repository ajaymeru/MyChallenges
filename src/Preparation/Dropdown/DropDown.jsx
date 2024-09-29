import React, { useState } from 'react';
import './DropDown.scss';

const countriesStates = {
    USA: ['California', 'Texas', 'Florida', 'New York'],
    India: ['Telangana', 'AP', 'Pune', 'TN', 'UP'],
    Canada: ['British Columbia', 'Ontario', 'Alberta'],
    Australia: ['Victoria', 'Queensland'],
};

const DropDown = () => {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [submittedCountry, setSubmittedCountry] = useState('');
    const [submittedState, setSubmittedState] = useState('');

    const handleSubmit = () => {
        setSubmittedCountry(country);
        setSubmittedState(state);
        setCountry(''); 
        setState('');   
    };

    return (
        <div className="DropDown">
            <h1>Country and State Dropdown</h1>
            <label htmlFor="country">Select Country:</label>
            <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            >
                <option value="">--Select Country--</option>
                {Object.keys(countriesStates).map((country) => (
                    <option value={country} key={country}>
                        {country}
                    </option>
                ))}
            </select>

            {country && (
                <>
                    <label htmlFor="state">Select State:</label>
                    <select
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                        <option value="">--Select State--</option>
                        {countriesStates[country].map((state) => (
                            <option value={state} key={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </>
            )}

            {state && (
                <button onClick={handleSubmit}>Submit</button>
            )}

            {submittedCountry && submittedState && (
                <p>
                    Selected Country: {submittedCountry}, Selected State: {submittedState}
                </p>
            )}
        </div>
    );
};

export default DropDown;
