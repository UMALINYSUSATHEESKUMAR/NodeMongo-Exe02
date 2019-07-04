var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("studentNode");
    var query =  { "maths_marks": { $lt: 50 },"english_marks": {$gt: 50} };
  dbo.collection("​studentmarksNode").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
