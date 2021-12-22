const React = require("react");
const Default = require("../Default");

function Show(data) {
  return (
    <Default>
      <main className="container">
        <div className="row"></div>
        <div className="col-sm-6">
          <h2>{data.place.name}</h2>
          <h2>Rating</h2>
          <p>Not Rated</p>
          <h2>Description</h2>
          <h3>
            Located in {data.place.city}, {data.place.state}
          </h3>
          <h4>Cuisines: {data.place.cuisines}</h4>
        </div>
        <div className="col-sm-6">
          <section>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <p>Currently Unrated</p>
          </section>
          <img src={data.place.pic} alt={data.place.name}/>
        </div>
        <div className="flex">
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </main>
    </Default>
  );
}

module.exports = Show;
