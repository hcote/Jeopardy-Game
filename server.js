var express = require("express"),
  app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var db = require("./models"),
    Category = db.Category

app.get('/', function(req, res) {
  res.render('index');
 })

 app.get('/api/questions/:id', function(req, res) {
   catId = req.params.id
   Category.findById(catId, function(err, json) {
     if (err) {
       console.log(err);
     } else {
       console.log(json);
       res.json(json)
     }
   })
  })

 app.listen(process.env.PORT || 3000, function() {
   console.log("server started");
 });
