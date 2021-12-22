const React = require("react");
const Default = require("../Default");

function Show(data) {
  
  let comments = <h3 className="inactive">No comments yet!</h3>;
  
  let rating = <h3 className="inactive">Not rated yet!</h3>;
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = sunRatings / data.place.comments.length;
    rating = <h3>{Math.random(averageRating)} stars</h3>;
  }

  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border col-sm-4">
          <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong> -{c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }

  return (
    <Default>
      <main>
        <div className="row">
        
          <h1>{data.place.name}</h1>
          <p>Serving: {data.place.cuisines}</p>
          <img src={data.place.pic} alt={data.place.name} />
          <p>
            Located in {data.place.city}, {data.place.state}
          </p>
         
          <h2>Description</h2>
          <p>{data.place.showEstablished()}</p>
          <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
            Edit
          </a>

          <form
            method="POST"
            action={`/places/${data.place.id}?_method=DELETE`}
          >
            
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>

          <div>
            <h2>Rating</h2>
            {rating}
          </div>

          <br />

          <div>
            <h2>Comments</h2>
            {comments}
          </div>

          <div className="form-group">
            <h2>Rant or Rave About Us</h2>

            <form method="POST" action={`/places/${data.place.id}/comment`}>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                name="author"
                id="author"
                className="form-control"
              ></input>

              <label htmlFor="content">Comment</label>
              <input
                type="textarea"
                name="content"
                id="content"
                className="form-control"
              ></input>

              <label htmlFor="stars">Star Rating</label>
              <input
                type="number"
                step={0.5}
                max={5}
                name="stars"
                id="stars"
              ></input>

              <label htmlFor="rant">Rant</label>
              <input type="checkbox" name="rant" id="rant"></input>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </main>
    </Default>
  );
}

module.exports = Show;
