const router = require('express').Router()

// More code here in a moment
router.get("/", (req, res)=>{
    res.render("places/index")
})

module.exports = router