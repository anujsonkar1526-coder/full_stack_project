const express=require('express');
const { product } = require('./data');
const app=express();
const cors=require('cors');
app.use(cors());

const dotenv=require('dotenv')
dotenv.config();

const PORT=process.env.PORT || 3000;




app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('hello world');
});

app.get('/api',(req,res)=>{
    res.send('api working');
});

app.get('/api/user',(req,res)=>{
    res.json(product);
});





app.listen(PORT,()=>{

    console.log('server run at 3000');
    

})