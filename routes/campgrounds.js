var express        = require("express"),
    router         = express.Router(),
    Campground     = require("../models/campground"),
    Comment        = require("../models/comment"),
    methodOverride = require("method-override"),
    mongoose       = require("mongoose"),
    middleware     = require("../middleware");
    
router.use(methodOverride("_method"))

//INDEX - show all campgrounds 
router.get("/",function(req,res){
      Campground.find({},function(err,allcampgrounds){
          if(err){
              console.log(err);
          } else {
              res.render("campgrounds/index",{campgrounds: allcampgrounds, currentUser: req.user});
          }
      });
});

//CREATE - add new campground to DB
    router.post("/", middleware.isLoggedIn, function(req, res){
  // get data from form and add to campgrounds array
  const { name, image, description, price, location} = req.body;

  const newCampground = { name, image, description, price, location, author: { id: req.user._id, username: req.user.username } };
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
  });

 

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req,res){
   res.render("campgrounds/new"); 
}); 

//SHOW - show info about one campground
router.get("/:id",function(req,res){
    //find the cg with provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/show",{campground: foundCampground});
        }
    });
    //render show with that cg
}); 

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req,res){
    Campground.findById(req.params.id,function(err, foundCampground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }else{
            res.render("campgrounds/edit",{campground: foundCampground});
        }
    });
});

// UPDATE CAMPGROUND ROUTE
// PUT - updates campground in the database
router.put("/:id", middleware.isLoggedIn, function(req, res){
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedcampground){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
  });


// DELETE CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership,function(req,res){
    //destroy blog
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds");
        }
    });
    //redirect
});


 
module.exports = router;