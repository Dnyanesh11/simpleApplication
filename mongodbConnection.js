var mongoose = require('mongoose');

function mongoConnetion(connectionString,callback){
  var retObj = {};
  mongoose.connect(connectionString,function(err){
    if(err){
      retObj.status = "error";
      retObj.error = err;
      callback(retObj);
    } else {
        callback(null,mongoose);
        
    }
});

}

module.exports = {
  mongoConnetion:mongoConnetion
}