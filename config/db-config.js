const mongoose=require('mongoose');

const connectToDatabase=(MONGODB_URI)=>{
    mongoose.connect(MONGODB_URI).then(()=>{
        console.log('Connected to MongoDB database.')
    })
}
module.exports=connectToDatabase;