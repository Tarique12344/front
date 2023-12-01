const router = require('express').Router();
let Booking = require('../models/Booking.model');


router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname= req.body.lastname;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const date = Date.parse(req.body.date);
    // const date = new Date();
    // const time = (req.body.time);
    const comment = req.body.comment;

const newBooking = new Booking({
    firstname,
    lastname,
    email,
    phonenumber,
    date,
    // time,
    comment
})
newBooking.save()
.then(() => res.json('Vacation Added'))
.catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;