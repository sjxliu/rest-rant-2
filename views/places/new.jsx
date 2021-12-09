const React = require("react")
const Default = require("../Default")

function newForm(){
    return(
        <Default>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                <div  className="new-form">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name" name="name" required/>
                </div>
                <div className="new-form">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" type="url" id="pic" name="pic"></input>
                </div>
                <div className="new-form">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" name="city"></input>
                </div>
                <div className="new-form">
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="state" name="state"></input>
                </div>
                <div className="new-form">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" required></input>
                </div>
                <button className="btn btn-primary" type="submit" value="Add Place">Add Place</button>
                </form>
            </main>
        </Default>
    )
}

module.exports = newForm;