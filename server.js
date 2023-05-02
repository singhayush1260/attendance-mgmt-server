const express=require('express');
const cors=require('cors');
require('dotenv').config();
const connectToDatabase=require('./config/db-config');

const authRoutes=require('./routes/authRoutes');

const app=express(); 
app.use(express.json());
app.use(cors());


const PORT=process.env.PORT;
const MONGODB_URI=process.env.MONGODB_URI;


app.use('/api/auth',authRoutes);



connectToDatabase(MONGODB_URI);

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
})