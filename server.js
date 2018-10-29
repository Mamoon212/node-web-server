const express= require("express");
const hbs= require("hbs");
var app= express();

hbs.registerPartials(__dirname+"/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname+"/public"));

app.use((req,res,next)=>{
    var now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});

hbs.registerHelper("getCurrentYear", ()=>{
    return new Date().getFullYear();
});

app.get("/", (req,res)=>{
    // res.send("HEllO!");
    res.render("home", {
        pageTitle:"Home Page",
        welcomeMessage:"Hello!",
    });
});

app.get("/about", (req,res)=>{
    res.render("about",{
        pageTitle:"About Page",
    });
});

app.get("/projects", (req,res)=>{
    res.render("projects",{
        pageTitle:"Projects Page",
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});