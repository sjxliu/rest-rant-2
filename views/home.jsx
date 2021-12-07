const React = require ("react")
const Default = require("./Default")

function home () {
    return (
      <Default>
          <main>
              <h1>HOME</h1>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Default>
    )
  }

  
module.exports = home; 