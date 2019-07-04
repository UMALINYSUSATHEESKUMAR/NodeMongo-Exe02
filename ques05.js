var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("studentNode");
    var query =   { "maths_marks" : { $gt:50 }};
  var name = {"name": 1, _id:0};
  dbo.collection("​studentmarksNode").find(query,name).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
