require('dotenv').config();

var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    flash      = require("connect-flash"),
    passport   = require("passport"),
 LocalStrategy = require("passport-local"),
methodOverride = require("method-override"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    User       = require("./models/user"),
    seedDB     = require("./seeds")
    
    
//requiring routes    
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index")
    
mongoose.connect("mongodb://localhost/yelp_camp_v8",{useNewUrlParser: true});     
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

//seedDB();

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "yes i am the most strong willed person on the planet!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//to pass currentuser to every route
//middleware, whatever function we provide to it will be called on every route
app.use(function(req, res, next){
    //pass that req.user to every single template
    //whatever we put in res.locals is whats available inside of our template
    res.locals.currentUser =   req.user;
    res.locals.error       =   req.flash("error");
    res.locals.success     =   req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The Yelpcamp server has started")
});  

