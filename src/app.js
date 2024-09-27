const express=require("express")

const app=express()


/* app.use("/astra",(req,res)=>{
    res.send("Hello Astra!")
})
app.get("/test",(req,res)=>{
    res.send("Hello test!")
}) */

//works for /ac  and /abc
/* app.get("/ab?c",(req,res)=>{
    res.send("Works")
}) */
//works for abbbbbbbbbb.........bc
/* app.get("/ab+c",(req,res)=>{
    res.send("Works")
}) */
//works for ablsdfknasgb;algflan'ohrlmaep;m;mcd
/* app.get("/ab*c",(req,res)=>{
    res.send("Works")
}) */

//above 3 are the examples of regular expressions


/* app.get("/users/:userId/:password",(req,res)=>{
    console.log(req.params)
    res.send("Works")
}) */




/* app.use("/",(req,res)=>{
    res.send("hiiiii")
}) */


//mutiple route handlers
app.use("/users",(req,res,next)=>{
    //res.send("response1")
    next()

},
(req,res)=>{
    res.send("response2")
},
(res,req)=>{
    res.send("response3")
}




)




app.listen(3000,()=>{
    console.log("app is listening on 3000")
})


//Notes
//1)Order of routes matters i.e. if app.use("/") is in top then it will block all the other response of "/xyz"
//2)app.use() will match all the http methods API calls to the particular routes provided whereas app.get() will match only get calls