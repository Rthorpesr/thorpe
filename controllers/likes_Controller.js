// Dependencies

console.log("2.) - Reggie");
var express = require("express");
// Import the model to use its db functions for likes.js
var likes = require("../models/likes.js");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();
// Create routes and set up logic where required.
router.get("/user", function (req, res) 
 {
     likes.selectAll(function(data) 
     {
        var hbsObject = 
        {
            likes: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
     });
 });

// Add new user to the db.
router.post("/api/likes", function (req, res)
 {
    emptypantry.likes( 
        [ "userEmail"
        ], 
        [ req.body.userEmail, 
        ],        
        function(result) 
           {
             // Send back the ID of the new burger
             res.json({ id: result.insertId });
           });
 });


// Delete user from db.
router.delete("/api/likes/:id", function(req, res) 
  {
     var condition = "id = " + req.params.id;
     console.log("condition", condition);

     burger.deleteOne(condition, function(result) 
       {
          if (result.changedRows === 0)
             {
               // If no rows were changed, then the ID must not exist, so 404.
               return res.status(404).end();
             } 
          else 
             {
                res.status(200).end();
             }
       });
  });

module.exports = router;