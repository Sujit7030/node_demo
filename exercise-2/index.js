const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mongo1-exercises')
.then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log('there is somethings errore in function',err);
})
const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    isPublished:Boolean,
    price:Number
});
const Course=mongoose.model('Course',courseSchema);

async function getCourses(){
    return await Course
   // .find({$or:[{tags:'frontend',tags:'backend'}]})
   
   .find({ isPublished: true })
   .or([  
     { price: { $gte: 15 } },
     { name: /.*by.*/i }
   ])
    .sort({price:-1})
    .select({name:1,author:1})
}
async function run(){
    const result=await getCourses();
    console.log(result);

}
run();