const express = require('express')
var cors = require('cors');
const mongoose = require('mongoose');
const port = 5000;
const app = express();

const uri = "mongodb+srv://tuvshu:Amingoo00@cluster0.8laz5mp.mongodb.net/"

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database is successfully connected");
    } catch (error) {
        console.log(error);
    }
}

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})

module.exports = connect;