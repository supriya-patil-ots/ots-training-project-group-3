import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import cityInfo from './models/cityData.js';
// import CityData from './models/data.js';

dotenv.config();

const app= express();
app.use(express.json());
app.use(cors());

// app.post('/',async(req,res)=>{
//     const data= await cityInfo.insertMany(CityData);
//     res.send(data)
//     console.log(data)
// });

app.get('/',async(req,res)=>{
    const data= await cityInfo.find();
    res.send(data);

});
app.get('/city/:id',async(req,res)=>{
    const {id}= req.params
    const data= await cityInfo.findById(id);
    res.send(data);
})


app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
});