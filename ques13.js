var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("studentNode");
  var myquery = {name: 'John'};
  var newvalues = {$rename: {"english_marks" : "science_marks"}};
  dbo.collection("​studentmarksNode").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + "Document Name Updated");
    db.close();
  });
});