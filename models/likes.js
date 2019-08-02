// Import orm.js into likes.js
var orm = require("../config/orm.js");
// The code that will call the ORM functions using likes specific input for the ORM.
var likes = 
    {
         // Display all likes in the db.
         selectAll: function(cb) 
           {
             orm.selectAll("likes", function(res) 
               {
                 cb(res);
               });
           },

         // Add a new likes to the db.
         insertOne: function(cols, vals, cb) 
           {
             orm.insertOne("likes", cols, vals, function(res) 
               {
                 cb(res);
               });
           },

         // Change the devoured status to true.
         updateOne: function(objColVals, condition, cb)
           {
              orm.updateOne("likes", objColVals, condition, function(res) 
                {
                   cb(res);
                });
            },

         // Delete a likes from the db.
         deleteOne: function(condition, cb) 
           {
             orm.deleteOne("likes", condition, function(res) 
               {
                 cb(res);
               });
           }
    };

// Export at the end of the likes.js file.
module.exports = likes;