const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises')
.then(()=>{
   console.log('connecting to databases ...');
}).catch((error)=>{
    console.log('there is error in dba',error);
})
const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date: {type:Date,default:Date.now},
    isPublished:Boolean,
    price: Number
})
const Courses=mongoose.model('Courses',courseSchema);

async function getCourses(){
    return await Courses
    .find({isPublished:true,tags:'backend'})
    .sort({name:1})
    .select({name:1,author:1})
    
}
async function run(){
    const result=await getCourses();
    console.log(result);
}
run();