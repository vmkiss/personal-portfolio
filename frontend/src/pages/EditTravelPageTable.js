import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTravelPageTable = ({ travelToEdit }) => {
 
    const [city, setCity]       = useState(travelToEdit.city);
    const [country, setCountry]         = useState(travelToEdit.country);
    const [daysVisited, setDaysVisited] = useState(travelToEdit.daysVisited);
    const [entryDate, setEntryDate] = useState(travelToEdit.entryDate);

    const redirect = useNavigate();

    const editTravel = async () => {
        const response = await fetch(`/travels/${travelToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                city: city, 
                country: country, 
                daysVisited: daysVisited,
                entryDate: entryDate
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Success! Your edits have been saved.`);
        } else {
            const errMessage = await response.json();
            alert(`Your edited submission is invalid. Please try again. Status code = ${response.status}. ${errMessage.Error}`);
        }
        redirect("/TravelsPage");
    }

    return (
        <>
        <article>
            <h2>Edit a travel record</h2>
            <p>Modify one or more of the fields below and click edit to save your changes.</p>
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
                            onClick={editTravel}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditTravelPageTable;