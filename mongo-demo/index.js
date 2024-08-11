// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/playground')
//   .then(() => console.log('Connected to MongoDB...'))
//   .catch(err => console.error('Could not connect to MongoDB...', err));

// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/playground')
// .then(()=>{
//     console.log('Connected to MongoDB...');
// }).catch(()=>{
//     console.log('Could not connect to MongoDB...');
// })

// const courseSchema=new mongoose.Schema({
//     name:String,
//     author:String,
//     tag:[String],
//     date:{type:Date,default:Date.now},
//     isPublished:Boolean
// });
// const Course=mongoose.model('Course,courseSchema');//model
// const course=new Course({//object ho class course
//     name:'Node Course',
//     author:'Sujit Yadav',
//     tag:['node','backend'],
//     isPublished:true
// });
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/sample')
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch((err) => console.error('Could not connect to MongoDB...', err));

// const courseSchema = new mongoose.Schema({
//     name: String,
//     author: String,
//     tags: [String],
//     date: { type: Date, default: Date.now },
//     array: [String], // Correctly defining the array field
//     isPublished: Boolean
// });

// const Course = mongoose.model('Course', courseSchema);

// async function createCourse() {
//     const course = new Course({
//         name: 'Node Course',
//         author: 'Sujit Yadav',
//         tags: ['node', 'backend'],
//         isPublished: true,
//         array: ['Roshan gandu', 'Raju'] // Adding values to the array
//     });

//     try {
//         const result = await course.save();
//         console.log(result);
//     } catch (err) {
//         console.error('Error creating course:', err);
//     }
// }

// async function getUser() {
//     try {
//         const courses = await Course.find();
//         console.log(courses);
//     } catch (err) {
//         console.error('Error getting courses:', err);
//     }
// }

// createCourse().then(() => {
//     getUser();
// });
const mongoose = require('mongoose');

// Corrected MongoDB connection string
mongoose.connect('mongodb://localhost:27017/rest')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

const schema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    course: [String],
    isPublished: Boolean,
    price: Number  // Define price as a Number type
});

const Course = mongoose.model('Course', schema);

async function createCourse() {
    const course = new Course({
        name: 'Programming',
        author: 'sujit',
        price: 12,  // Use a numeric value for price
        tags: ['node', 'backend'],
        isPublished: true
    });
    const result = await course.save();
    console.log(result);
}

async function getUser(){
    try{
        const result = await Course
        //.find({ price: { $gt: 5 } });
       // .find({price:{$in:[10,20,30]}})//if the price of course is 10,20,30
        .find({
            $and:[
                {author:'sujit'},
                {isPublished:true}
            ]
        });
        console.log(result);
        return result;
    } catch (err) {
        console.error('Error getting courses:', err);
    }
}

// Call createCourse before getUser to ensure there's data to fetch
createCourse().then(() => {
    getUser();
});
