const express = require("express");
const router = express.Router();

// Middleware that is specific to this router
router.use((req,res,next) => {
  console.log('Time' , Date.now())
  next()
})



router.get("/", (req, res) => {
  res.send("This is routes blog");
});


router.get("/about", (req, res) => {

  res.send("My blog about");
});


router.post("/", (req, res) => {
  res.send("New blog created");
});




module.exports = router;
