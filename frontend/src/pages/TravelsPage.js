import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TravelList from '../components/TravelList';
import { Link } from 'react-router-dom';

//import { MdOutlineCreateNewFolder } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";

function TravelsPage({ setTravel }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [travels, setTravels] = useState([]);

    // RETRIEVE the entire list of travel records
    const loadTravels = async () => {
        const response = await fetch('/travels');
        const travels = await response.json();
        setTravels(travels);
    } 
    

    // UPDATE a single travel record
    const onEditTravel = async travelRecord => {
        setTravel(travelRecord);
        redirect("/update");
    }


    // DELETE a single travel record 
    const onDeleteTravel = async _id => {
        const response = await fetch(`/travels/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/travels');
            const travels = await getResponse.json();
            setTravels(travels);
        } else {
            console.error(`Your attempt to delete the travel record with the following ID was unsuccessful = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the travel records
    useEffect(() => {
        loadTravels();
    }, []);

    // DISPLAY the travel records
    return (
        <>
            <h2>Travel Log</h2>
            <p>Check out all of the incredible places I've had the pleasure of visiting over the years! Add your own travel adventure to the log by clicking on the plus sign above the table. If you'd like to delete or edit an entry, click on the appropriate icon in the table below.</p>
            <Link to="/create"><i id="add-icon"><MdAddCircleOutline /></i></Link>
            <TravelList 
                travels={travels} 
                onEdit={onEditTravel} 
                onDelete={onDeleteTravel} 
            />
        </>
    );
}

export default TravelsPage;