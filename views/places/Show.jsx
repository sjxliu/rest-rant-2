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
            </main>
        </Default>
    )

}

module.exports = Show;