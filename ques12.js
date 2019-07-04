var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("studentNode");
  var myobj = [
    { name: 'John', maths_marks: 87, english_marks: 23}
  ];
  dbo.collection("​studentmarksNode").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(`Number of new documents Successfully Inserted:  ${res.insertedCount}`);
    db.close();
  });
});