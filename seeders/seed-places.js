const db = require("../models")

db.Places.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/matcha.jpg',
    founded: 1989
}, {
    name: "Coding Cat Cafe", 
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/pizza.jpg',
    // credit: Feline DaCat @ https://www.flickr.com/photos/feline_dacat/city: 'Phoenix',
    founded: 2020
}])
.then(()=>{
    console.log("Success!")
    process.exit()
})
.catch(()=>{
    console.log("Failed!", err)
    process.exit()

})