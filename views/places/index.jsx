const React = require("react")
const Default = require("../Default")

function index(data){
    console.log(data)
    let placesFormatted = data.places.map((place)=>{
        return(
            <div className="col-sm-6">
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Default>
            <main>
                <h1>Places to Rant or Rave about</h1>
               <div className="row"> 
                   {placesFormatted}
                </div>
            </main>
        </Default>
    )
}

module.exports = index;
