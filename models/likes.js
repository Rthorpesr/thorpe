// Import orm.js into burger.js
var orm = require("../config/orm.js");
// The code that will call the ORM functions using burger specific input for the ORM.
var burger = 
    {
         // Display all users in the db.
         selectAll: function(cb) 
           {
             orm.selectAll("users", function(res) 
               {
                 cb(res);
               });
           },

         // Add a new burger to the db.
         insertOne: function(cols, vals, cb) 
           {
             orm.insertOne("users", cols, vals, function(res) 
               {
                 cb(res);
               });
           },

         // Change the devoured status to true.
         updateOne: function(objColVals, condition, cb)
           {
              orm.updateOne("users", objColVals, condition, function(res) 
                {
                   cb(res);
                });
            },

         // Delete a burger from the db.
         deleteOne: function(condition, cb) 
           {
             orm.deleteOne("users", condition, function(res) 
               {
                 cb(res);
               });
           }
    };

// Export at the end of the burger.js file.
module.exports = likes;