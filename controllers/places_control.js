const router = require('express').Router()
const places = require('../models/places')

// More code here in a moment
// router.get("/", (req, res)=>{
//     res.render("places_control/index", {places_control})
// })

router.post('/', (req, res) => {
  // console.log(req.body)
  if (!req.body.pic){
    // default img not provided.. yet
    req.body.pic = "https://placedog.net/640/480?random"
  }
  if (!req.body.city) {
    req.body.city = "Burnt Porcupine"
    if (!req.body.state) {
      req.body.state = "Maine, USA"
    }
    places.push(req.body)
  }
  res.redirect('/places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get('/', (req, res) => {
    res.render('places/index', {places})
  })

module.exports = router