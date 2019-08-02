// Import orm.js into saveforlater.js
var orm = require("../config/orm.js");
// The code that will call the ORM functions using saveforlater specific input for the ORM.
var saveforlater = 
    {
         // Display all saveforlater in the db.
         selectAll: function(cb) 
           {
             orm.selectAll("saveforlater", function(res) 
               {
                 cb(res);
               });
           },

         // Add a new saveforlater to the db.
         insertOne: function(cols, vals, cb) 
           {
             orm.insertOne("saveforlater", cols, vals, function(res) 
               {
                 cb(res);
               });
           },

         // Change the devoured status to true.
         updateOne: function(objColVals, condition, cb)
           {
              orm.updateOne("saveforlater", objColVals, condition, function(res) 
                {
                   cb(res);
                });
            },

         // Delete a saveforlater from the db.
         deleteOne: function(condition, cb) 
           {
             orm.deleteOne("saveforlater", condition, function(res) 
               {
                 cb(res);
               });
           }
    };

// Export at the end of the saveforlater.js file.
module.exports = saveforlater;