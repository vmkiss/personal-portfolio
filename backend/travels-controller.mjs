// Controllers for the Travels Collection

import 'dotenv/config';
import express from 'express';
import * as travels from './travels-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/travels', (req,res) => { 
    travels.createTravel(
        req.body.city,
        req.body.country, 
        req.body.daysVisited, 
        req.body.entryDate
        )
        .then(travel => {
            console.log(`"${travel.city}" travel record was added to the collection.`);
            res.status(201).json(travel);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'You submitted an invalid request to create a travel record.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/travels', (req, res) => {
    travels.retrieveTravels()
        .then(travels => { 
            if (travels !== null) {
                console.log(`All travel records were retrieved from the collection.`);
                res.json(travels);
            } else {
                res.status(404).json({ Error: 'You attempted to retrieve a travel record that does not exist.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'You submitted an invalid request to retrieve a travel record.' });
        });
});


// RETRIEVE by ID controller
app.get('/travels/:_id', (req, res) => {
    travels.retrieveTravelByID(req.params._id)
    .then(travel => { 
        if (travel !== null) {
            console.log(`"${travel.city}" travel record was retrieved, based on its ID.`);
            res.json(travel);
        } else {
            res.status(404).json({ Error: 'You attempted to retrieve a travel record using an ID that does not exist.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'You submitted an invalid request to retrieve a travel record by ID.' });
    });

});


// UPDATE controller ************************************
app.put('/travels/:_id', (req, res) => {
    travels.updateTravel(
        req.params._id, 
        req.body.city,
        req.body.country, 
        req.body.daysVisited, 
        req.body.entryDate
    )
    .then(travel => {
        console.log(`"${travel.city}" travel record was updated.`);
        res.json(travel);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'You submitted an invalid request to update a travel record.' });
    });
});


// DELETE Controller ******************************
app.delete('/travels/:_id', (req, res) => {
    travels.deleteTravelById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} travel record was deleted.`);
                res.status(200).send({ Success: 'You successfully deleted a travel record based on its ID.' });
            } else {
                res.status(404).json({ Error: 'You attempted to delete a travel record using an ID that does not exist.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'You submitted an invalid request to delete a travel record by ID.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});