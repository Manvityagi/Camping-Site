var mongoose=require("mongoose"); 
//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    location: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
        
        ],
      author: {
      id: {
             type: mongoose.Schema.Types.ObjectId,
             ref: "User"
          },
             username: String
       }
});

module.exports = mongoose.model("Campground",campgroundSchema); 