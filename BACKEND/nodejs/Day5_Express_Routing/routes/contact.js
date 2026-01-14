const express = require("express");
const router = express.Router();

// Middleware that is specific to this router
router.use((req,res,next) => {
  console.log('Time' , Date.now())
  next()
})



router.get("/", (req, res) => {
  res.send("This is routes contact");
});


router.get("/about", (req, res) => {

  res.send("My rout contact about");
});


router.post("/", (req, res) => {
  res.send("New r created");
});




module.exports = router;
