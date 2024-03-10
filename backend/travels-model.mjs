// Models for the Travels Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Your attempt to connect to the MongoDB Travels Collection server was unsuccessful.' });
    } else  {
        console.log('Success: You are now connected to the MongoDB Travels Collection server.');
    }
});

// SCHEMA: Define the collection's schema.
const travelSchema = mongoose.Schema({
    city:    { type: String, required: true },
	country:    { type: String, required: true },
	daysVisited:     { type: Number, required: true },
	entryDate: { type: Date, required: true}
});

// Compile the model from the schema 
// by defining the collection name "travels".
const travels = mongoose.model('Travels', travelSchema);


// CREATE model *****************************************
const createTravel = async (city, country, daysVisited, entryDate) => {
    const travel = new travels({ 
        city: city,
        country: country, 
        daysVisited: daysVisited, 
        entryDate: entryDate 
    });
    return travel.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveTravels = async () => {
    const query = travels.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTravelByID = async (_id) => {
    const query = travels.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTravelById = async (_id) => {
    const result = await travels.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTravel = async (_id, city, country, daysVisited, entryDate) => {
    const result = await travels.replaceOne({_id: _id }, {
        city: city,
        country: country,
        daysVisited: daysVisited,
        entryDate: entryDate
    });
    return { 
        _id: _id, 
        city: city,
        country: country,
        daysVisited: daysVisited,
        entryDate: entryDate 
    }
}

// EXPORT the variables for use in the controller file.
export { createTravel, retrieveTravels, retrieveTravelByID, updateTravel, deleteTravelById }