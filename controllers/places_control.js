const router = require('express').Router()
const res = require('express/lib/response')
const places = require('../models/places')

// More code here in a moment


router.get("/", (req, res)=>{
    res.render("places_control/index", {places_control})
})

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


router.get("/:id", (req, res)=>{
  // res.render("places/show")
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render("error404")
  } else if (!places[id]) {
      res.render("error404")
  }
   else {
     //Dig into req.body + make syre data is valid
    if(!req.body.pic){
      //Default image if one isn't provided
      req.body.pic = "http://place-puppy.com/400x400"
    }
    if(!req.body.city){
      req.body.city = "Burnt Porcupine"
    }
    if(req.body.state){
      req.body.state = "USA"
    }
    //save new data into places [id]
    places[id] = req.body

    res.redirect("/places/${id}")
  }
})

// Edit
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render("error404")
  } 
  else if (!places[id]) {
    res.render("error404")
  }
  else {
    res.render("places/edit", {place: places[id]})
  }
})


//Delete
router.delete("/places/:id", (req, res)=>{
  let id = Number(req.params.id)
  if (NaN(id)){
    res.render("error404")
  } 
  else if (!places[id]) {
    res.render("error404")
  } 
  else {
    places.splice(id, 1)
    res.redirect("/places")
  }
})


module.exports = router