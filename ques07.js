var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("studentNode");
  var myquery = {"science_marks" : 45};
  var newvalues = {$set: {"science_marks" : 75}};
  dbo.collection("​studentmarksNode").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + "Mala's maths_marks Increes");
    db.close();
  });
});