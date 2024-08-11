const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mongo1-exercises')
.then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err.message);
});
 const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date: Date,
    isPublished:Boolean,
    price:Number
 })
 const Course=mongoose.model('Course',courseSchema)

 async function getCourse(){
    return await Course
       .find({tags:'frontend',isPublished:true})
       .sort({price:-1})
       .select({name:1,author:1})
 }
 async function run(){
    const courses=await getCourse();
    console.log(courses);
 }

 async function updateCourses(Id) {
  const course=await Course.findById(Id)
  course.isPublished=true;
  Course.author='Roshan Gandu'
    const result=await Course.save();
    console.log(result);
 }
 updateCourses("5a68fdc3615eda645bc6bdec");