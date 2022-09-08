
const { application } = require("express");
const express = require("express");
const morgan = require("morgan");
const port =8000;

const app=express()


app.use(morgan(":method :status :res[content-length] - :response-time ms :date[clf] HTTP/:http-version :url "));
app.get("/" ,(res,req)=>{
  req.send("hi")
})

app.listen(port, ()=>{
    console.log(`listed on ${port}`)
})







