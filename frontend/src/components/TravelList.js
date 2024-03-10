import React from 'react';
import Travel from './Travel';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function TravelList({ travels, onDelete, onEdit }) {
    return (
        <table id="travels">
            <caption>Add and Edit Travel Records</caption>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Country</th>
                    <th>Days Visited</th>
                    <th>Entry Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {travels.map((travel, i) => 
                    <Travel 
                        travel={travel} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TravelList;
