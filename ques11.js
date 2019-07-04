var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("studentNode");
  var myquery = {"name" : "Raam"};
  var newvalues = {$unset: {"science_marks" : 75}};
  dbo.collection("​studentmarksNode").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + "Deleted");
    db.close();
  });
});