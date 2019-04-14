const jwt = require('jsonwebtoken');

const secret = "sorryitsprivate";

const withAuth = function(req,res,next){
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;
  console.log(req.body.token,req.query.token);

  if(!token){
    res.send("no token provided");
  }else{
    jwt.verify(token,secret,function(err,decoded){
      if(err){
        res.send("Invalid token");
      }else{
        req.username = decoded.username;
        next();
      }
    })
  }
}

module.exports = withAuth;
