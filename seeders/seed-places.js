const db = require("./models")

db.Places.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250',
    founded: 1989
}, {
    name: "Coding Cat Cafe", 
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://live.staticflickr.com/2827/9266166416_5a47157545_b.jpg',
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