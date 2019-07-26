const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.get("/", (req, res) => res.send("Users route GET"));
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Enter email please").isEmail(),
    check("password", "Please enter a password 6 or more characters").isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Users route POST");
  }
);
module.exports = router;
