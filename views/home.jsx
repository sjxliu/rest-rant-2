const React = require ("react")
const Default = require("./Default")

function home () {
    return (
      <Default>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/sushi.jpg" alt="Sushi topped with greens" width={400} height={500}></img>
                <div>
                  Photo by: <a href="https://www.pexels.com/@cottonbro">Cottonbro</a> on <a href="https://www.pexels.com">Pexels</a>
                </div>
                </div>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Default>
    )
  }

  
module.exports = home; 