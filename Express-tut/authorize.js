const authorize = (req,res,next) =>{
    const {user} = req.query
    if(user === 'john'){
        console.log('Authorized')
        next()
    }else{
        res.status(401).send('Unauthorized')
    }
}
module.exports = authorize