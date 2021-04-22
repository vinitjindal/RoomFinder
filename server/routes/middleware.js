const jwt = require('jsonwebtoken');

const secret = "sorryitsprivate";

const withAuth = function(req,res,next){
  const token = req.body.token


  // res.send(req.cookies);
  //console.log(req.body.token,req.query.token);


  if(!token) res.send("no token provided");
  try{
      const decoded = jwt.verify(token,secret)
      req.user = decoded;
      next();
    }catch(e){
      res.status(401).send("token is not valid");
    }
  }

module.exports = withAuth;
