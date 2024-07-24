const mongoose=require('mongoose');


//destructure schema from mongoose
const {Schema}=mongoose;

//or
// const schema=mongoose.Schema();

const userProfileSchema=new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    contact:{
        type: Number,
        required:false

    },


});

const UserProfile=mongoose.model('UserProfile', userProfileSchema);
module.exports=UserProfile;