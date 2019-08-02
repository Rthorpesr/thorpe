// Import orm.js into users.js
var orm = require("../config/orm.js");
// The code that will call the ORM functions using burger specific input for the ORM.
var users = 
    {
         // Display all users in the db.
         selectAll: function(cb) 
           {
             orm.selectAll("users", function(res) 
               {
                 cb(res);
               });
           },

         // Add a new user to the db.
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

         // Delete a user from the db.
         deleteOne: function(condition, cb) 
           {
             orm.deleteOne("users", condition, function(res) 
               {
                 cb(res);
               });
           }
    };

// Export at the end of the users.js file.
console.log("5.) - Reggie");
module.exports = users;