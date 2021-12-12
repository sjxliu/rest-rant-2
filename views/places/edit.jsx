const React = require("react")
const Default = require("../Default")

function edit_form(data){
    return(
        <Default>
            <main>
                <h1>Edit Place</h1>
            </main>
            <a href={"/places/${data.id}/edit"} className="btn btn-warning">
                Edit
                </a>
                <form method="POST" action={"/places/${data.id}?_method=PUT"}>
                  
                  <div className="row">

                   <div className="form-group col-sm-6">

                    <label htmlFor="name">
                    Place Name
                    </label>

                    <input
                    className="form-control"
                    id="name"
                    name="name"
                    value={data.place.name}
                    required
                    />
                  </div>

                  <div className="form-group col-sm-6">
                      <label htmlFor="pic">Place Picture</label>
                    <input
                    id="pic"
                    name="pic"
                    value={data.place.img}
                    />

                  </div>

                    </div> 
                </form>
        </Default>
    )
}

module.exports = edit_form