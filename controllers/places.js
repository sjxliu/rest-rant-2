const router = require('express').Router()

// More code here in a moment
router.get("/", (req, res)=>{
    res.sender("places/index")
})

module.exports = router