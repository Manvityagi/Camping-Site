var express        = require("express"),
    router         = express.Router({mergeParams: true}),
    Campground     = require("../models/campground"),
    Comment        = require("../models/comment"),
    middleware     = require("../middleware");

// ===========================
// COMMENTS ROUTES
// ==========================

//NEW COMMENT  
router.get("/new", middleware.isLoggedIn, function(req, res){
    Campground.findById(req.params.id,function(err, campground){
        if(err){
            console.log(err);
        }else{
             res.render("comments/new",{campground: campground});
        }
    });
}); 

//CREATE
router.post("/", middleware.isLoggedIn, function(req, res){

    Campground.findById(req.params.id,function(err, campground) {
        if(err){
            console.log(err);
            res.redirect("/campgrounds")
        }else{
            Comment.create(req.body.comment,function(err,comment){
                if(err){
                    req.flash("error", "Something went wrong !");
                    console.log(err);
                }else{
                    //add username & id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    
                    campground.comments.push(comment);
                    campground.save();
                    console.log("hey")
                    console.log(campground)
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
});

//EDIT COMMENT
router.get("/:comment_id/edit",function(req, res){
    Comment.findById(req.params.comment_id, function(err,foundcomment){
        if(err){
            res.redirect("back");
        }else{
            res.render("comments/edit", {campground_id: req.params.id, comment: foundcomment})                                                  
        }
    });
});

//UPDATE COMMENT
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedcomment){
        if(err){
            res.redirect("back");
        }else{
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//DELETE COMMENT
router.delete("/:comment_id", middleware.checkCommentOwnership , function(req, res){
   Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
           res.redirect("back");
       }else{
           res.redirect("/campgrounds/" + req.params.id);
       }
   })
})


module.exports = router; 