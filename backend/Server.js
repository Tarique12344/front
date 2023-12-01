const express = require('express');
const cors =require('cors');
const mongoose =require('mongoose');

require('dotenv').config();

const app= express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri='mongodb+srv://Tywest121:Ty11082001!@cluster0.i36caqb.mongodb.net/Capstone-Project'
mongoose.connect(uri,{useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


const ContactsRouter= require('./routes/Contacts');
const AddAttractionsRouter= require('./routes/AddAttractions');
const AttractionsRouter= require('./routes/Attractions1');
const BookingRouter= require('./routes/Bookings');


app.use('/contact', ContactsRouter);
app.use('/addattraction', AddAttractionsRouter);
app.use('/attractions', AttractionsRouter);
app.use('/booking', BookingRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});