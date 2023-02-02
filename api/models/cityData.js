import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// ----------- making connection------------------------------

try {
mongoose.connect(`${process.env.MONGO_URL}`,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("connection successfull")); 
} catch (error) {
    console.log(error);
}

const CitySchema= new mongoose.Schema(
    {
      countryName: {type: String, required: true},
      cityName:{type:String, required: true},
      rating:{type:String, required:true},
      description:{type:String, required: true},
      date:{type:String, required:true},
      imageMain:{type:String, required:true},
      imageCollection: {type: Array,required:true},
      price:{type:String,required:true},
      count:{type:Number,required:true}
    }
  );

//   creating a new bookInfo collection ------------------------------


const cityInfo= mongoose.model('CityData',CitySchema);

export default cityInfo;