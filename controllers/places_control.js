const router = require("express").Router();
const db = require("../models/places");

// More code here in a moment

// Index
router.get("/", (_req, res) => {
  db.Places.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch(err => {
      console.log(err);
      res.render("error404");
    });
  // res.render("places_control/index", {places_control})
});

// Post

router.post("/", (req, res) => {
  if (req.body.pic === "") {
    req.body.pic = undefined;
  }
  if (req.body.city === "") {
    req.body.city = undefined;
  }
  if (req.body.state === "") {
    req.body.state = undefined;
  }
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error;";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`;
          message += `${err.errors[fields].message}`;
        }
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

// New

router.get("/new", (req, res) => {
  res.render("places/new");
});

// Show
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });

  // }
});

// --------------------------------------------------------------

router.post("/:id/comment", (req, res) => {
  console.log(req.body);
  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          res.render("error404");
        });
    })
    // req.body.rant = req.body.rant ? true : false;
    // ^ short hand for:
    // if (req.body.rant = true){
    // req.body.rant = true
    //}
    // else { req.body.rant = false}
    .catch((err) => {
      res.render("error404");
    });
});

// --------------------------------------------------------------

router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

//Delete
router.delete("/:id", (req, res) => {
  db.Places.findByIdAndDelete(req.params.id)
    .then(place => {
    res.redirect("/places");
  }) .catch(err =>{
    console.log("err", err)
    res.render("error404")
  })
});

// Edit
router.get("/:id/edit", (req, res) => {
db.Places.findById(req.params.id)
.then(place => {
  res.render("places/edit", { place })
})
.catch (err => {
  res.render("error404")
})
});

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;
