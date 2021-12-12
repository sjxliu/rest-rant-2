const React = require("react")
const Default = require("../Default")

function Show (data){

    return(
        <Default>
            <main>
                <h1>{data.places.name}</h1>
                <section>
                    <p>Currently Unrated</p>
                </section>
                <section>
                    <p>No Comments Yet</p>
                </section>
                <a href={"/places/${data.id}/edit"} className="btn btn-warning">
                Edit
                </a>
                <form method="POST" action={"/places/${data.id}?_method=DELETE"}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Default>
    )

}

module.exports = Show;