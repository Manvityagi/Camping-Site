var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "CLouds Fiesta",
    image:
      "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f6c57da0ecb4bb_340.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla felis, iaculis blandit rhoncus non, facilisis eget libero. Nunc tincidunt arcu et viverra iaculis. Sed molestie in justo non interdum. Vestibulum eget purus nec ex feugiat aliquet vel vitae orci. Nam convallis malesuada dictum. Duis sagittis sit amet risus vel vehicula. Suspendisse accumsan vestibulum nisi, sed tincidunt erat convallis nec. Aliquam erat volutpat. Mauris sagittis tempus vehicula.",
  },
  {
    name: "Rock Fields",
    image:
      "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144593f4c57ea6ecb6_340.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla felis, iaculis blandit rhoncus non, facilisis eget libero. Nunc tincidunt arcu et viverra iaculis. Sed molestie in justo non interdum. Vestibulum eget purus nec ex feugiat aliquet vel vitae orci. Nam convallis malesuada dictum. Duis sagittis sit amet risus vel vehicula. Suspendisse accumsan vestibulum nisi, sed tincidunt erat convallis nec. Aliquam erat volutpat. Mauris sagittis tempus vehicula.",
  },
  {
    name: "CameybAys",
    image: "https://farm6.staticflickr.com/5349/9115889648_9518307558.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla felis, iaculis blandit rhoncus non, facilisis eget libero. Nunc tincidunt arcu et viverra iaculis. Sed molestie in justo non interdum. Vestibulum eget purus nec ex feugiat aliquet vel vitae orci. Nam convallis malesuada dictum. Duis sagittis sit amet risus vel vehicula. Suspendisse accumsan vestibulum nisi, sed tincidunt erat convallis nec. Aliquam erat volutpat. Mauris sagittis tempus vehicula.",
  },
];

function seedDB() {
  //remove all camp
  Campground.deleteMany({}, function (err) {
    if (err) {
      console.log(err);
    }

    //add a few campgrounds
    /* data.forEach(function(seed){ 
        Campground.create(seed,function(err, campground){
               if(err){
                   console.log(err);
               }else{
                   console.log("added a cg");
                   //add a few comments
                   Comment.create({
                       
                       text: "This place is great, but I wish there were hot boys here!",
                       author: "Ibiza"
                       
                   },function(err, comment){
                       if(err){
                           console.log(err);
                       }else{
                           campground.comments.push(comment);
                           campground.save();
                           console.log("created new comment");
                       }
                   });
               }
          });
      });*/
  });
}

module.exports = seedDB;
