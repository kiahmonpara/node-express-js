const logger = (req,res,next) =>{
    const METHOD = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(METHOD,url,time)
    next()
}
module.exports = logger