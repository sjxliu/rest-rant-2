const React = require("react");
const Default = require("./Default");

function error404() {
  return (
    <Default>
      <main>
        <h1>404: Page Not Found</h1>
        <p>Apologies! We can not find this page!</p>
        <div style={{ textAlign: "center" }}>
          <img
            src="/images/404_error.jpg"
            alt="Figurine of Human Skeleton Sitting Infront of Computer"
          ></img>
          <div>
            Photo by:{" "}
            <a href="https://www.pexels.com/@cody-berg-98219">cody berg</a> on{" "}
            <a href="https://www.pexels.com">Pexels</a>
          </div>
        </div>
      </main>
    </Default>
  );
}

module.exports = error404;
