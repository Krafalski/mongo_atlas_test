// Dependencies
const express = require('express');
// Configurations
const hotels = express.Router();

// Data/Database/Model(s)
const Hotel = require('../models/hotel.js');
const hotelseed = require('../models/seed.js')

// ROUTES
// get index
hotels.get('/', (req, res) => {
  // finds all hotels
Hotel.find({}, (err, foundHotels) => {
    res.render('index.ejs', {
      hotels: foundHotels
    });
  });
});


hotels.get ('/seed', (req, res) => {
  Hotel.insertMany(hotelseed, (err, hotels) => {
    if (err) {
      console.log(err)
      res.send('there was an error seeding the data')
    } else {
      console.log('seed successful!')
      res.redirect('/hotels')
    }
  })
});

// EXPORT
module.exports = hotels;
