var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("studentNode");
  var myquery = {"name" : "Mala"};
  var newvalues = { $inc: {"maths_marks" : 6}};
  dbo.collection("​studentmarksNode").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + "Mala's maths_marks Increes");
    db.close();
  });
});