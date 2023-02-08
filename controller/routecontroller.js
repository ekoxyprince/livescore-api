const https = require("https")
const { stdout } = require("process")

exports.getHome = (req,res,next)=>{
    let matchArray;
    https.get(`https://livescore-api.com/api-client/scores/live.json?&key=${process.env.API_KEY}&secret=${process.env.API_SECRET}`,(resp)=>{
        resp
        .on("data",(data)=>{
          let parsedData = JSON.parse(data)
           matchArray = parsedData.data.match 
        res
        .render("./page",{matchArray})
        })
    })
}