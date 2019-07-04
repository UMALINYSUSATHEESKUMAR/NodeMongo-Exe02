var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("studentNode");
    var query =   {};
  var newvalues = {$set: {Average: ""}};
  dbo.collection("​studentmarksNode").updateMany(query, newvalues, function(err, result) {
    if (err) throw err;
    console.log("Average Added");
    db.close();
  });
});
