var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/demoDb');
var mongoSchema =   mongoose.Schema;
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String,
    "userAddress"  : String,
    "userPhone"	   : String,
    "userFirstName" :String,
    "userName" : String,
    "userLastName"  :String
};
module.exports = mongoose.model('userLogin',userSchema);;
