const mongoose = require("mongoose")

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  pic: String,
  cuisines: {type: String,  required: true},
  city: {type: String, default: "Burnt Porcupine"},
  state: {type:String, default:"Maine"},
  founded: Number,
})

module.exports = mongoose.model("Place", placeSchema)







// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: 'http://placekitten.com/250/250'
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: 'https://live.staticflickr.com/2827/9266166416_5a47157545_b.jpg'
//     // credit: Feline DaCat @ https://www.flickr.com/photos/feline_dacat/
//   }]

// GET /places
// app.get('/', (req, res) => {
//     let places = [{
//         name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: 'http://placekitten.com/250/250'
//       }, {
//         name: 'Coding Cat Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: 'http://placekitten.com/250/250'
//       }]
//     res.render('places/index', {places})
//   })