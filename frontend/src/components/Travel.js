import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.
import { RiDeleteBinLine } from "react-icons/ri";
import { LuFolderEdit } from "react-icons/lu";


function Travel({ travel, onEdit, onDelete }) {
    return (
        <tr>
            <td>{travel.city}</td>
            <td>{travel.country}</td>
            <td>{travel.daysVisited}</td>
            <td>{travel.entryDate.slice(0, 10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><RiDeleteBinLine onClick={() => onDelete(travel._id)} /></td>
            <td><LuFolderEdit onClick={() => onEdit(travel)} /></td>
        </tr>
    );
}

export default Travel;