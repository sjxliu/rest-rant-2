const router = require('express').Router()
// const places_control = require('../models/places')

// More code here in a moment
// router.get("/", (req, res)=>{
//     res.render("places_control/index", {places_control})
// })

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/pizza.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/matcha.jpg'
      }]
    res.render('places/index', {places})
  })

module.exports = router