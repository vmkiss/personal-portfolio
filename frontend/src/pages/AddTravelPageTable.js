import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Travel from '../components/Travel';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddTravelPageTable = () => {

    const [city, setCity]       = useState('');
    const [country, setCountry]         = useState('');
    const [daysVisited, setDaysVisited] = useState('');
    const [entryDate, setEntryDate] = useState(Travel.entryDate);
    
    const redirect = useNavigate();

    const addTravel = async () => {
        const newTravel = { city, country, daysVisited, entryDate };
        const response = await fetch('/travels', {
            method: 'post',
            body: JSON.stringify(newTravel),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Success! Your new entry has been added to the travel log.`);
        } else {
            alert(`Your submission is invalid. Please make sure all fields are filled out correctly and try again. Status code = ${response.status}`);
        }
        redirect("/TravelsPage");
    };


    return (
        <>
        <article>
            <h2>Add a travel record</h2>
            <p>Enter the name of the city and country you visited, the number of days you visited for, and your entry date. Click the add button to create your new travel record.</p>
            
            <table id="travels">
                <caption>Which travel record are you adding?</caption>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Country</th>
                        <th>Days Visited</th>
                        <th>Entry Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="city"></label>
                        <input
                            type="text"
                            placeholder="Name of city visited"
                            value={city}
                            size="15"
                            onChange={e => setCity(e.target.value)} 
                            id="city" />
                    </td>

                    <td><label for="country"></label>
                        <input
                            type="text"
                            value={country}
                            placeholder="Name of country visited"
                            size="20"
                            onChange={e => setCountry(e.target.value)} 
                            id="country" />
                    </td>

                    <td><label for="daysVisited"></label>
                        <input
                            type="number"
                            placeholder="Number of days spent at destination"
                            value={daysVisited}
                            size="3"
                            onChange={e => setDaysVisited(e.target.value)} 
                            id="daysVisited" />
                            
                    </td>
                    
                    <td><label for="entryDate"></label>
                        <input
                            type="date"
                            placeholder="Date arrived at destination"
                            value={entryDate}
                            onChange={e => setEntryDate(e.target.value)} 
                            id="entryDate" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={addTravel}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddTravelPageTable;