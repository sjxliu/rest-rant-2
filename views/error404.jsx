const React = require("react")
const Default = require("./Default")

function error404 (){
    return(
        <Default>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Apologies! We can not find this page!</p>
            </main>
        </Default>
    )
}

module.exports = error404