const db = require("../models");

async function seed() {
  let place = await db.Place.findOne({ name: "H-Thai-ML" });

  //Fake Comment
  let comment = await db.Comment.create({
    author: "Famished Fran",
    rant: false,
    stars: 5.0,
    content: "Best ever",
  });

  place.comments.push(comment.id)

  
  process.exit();
}

seed();
