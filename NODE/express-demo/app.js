    const course=require('./router/course');
    const user=require('./router/home');
    const logger=require('./middleware/logger')
    const app=express();
    /*const express = require('express');
    const app = express();
    
    app.get('/', (req, res) => {
        res.send({ id: 1027, name: 'gem' });
    });
    app.get('/api/course/:year/:month',(req,res)=>{
        res.send(`year ${req.params.year} and month is ${req.params.month}`)
    })
    
    let port = process.env.PORT ||3000;
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    }); */

// const express = require('express');
// const app = express();
// const array = [1, 2, 3];
// app.get('/app', (req, res) => {
//     res.send('hii');
// });

// app.get('/api/array', (req, res) => {
//     res.send(array);
// });

// app.get('/api/array/id/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     if (isNaN(id) || id < 0 || id >= array.length) {
//         res.status(404).send('Element not found');
//     } else {
//         res.send(array[id].toString());
//     }
// });
// app.get('/api/course/:year/:month', (req, res) => {
//     res.send(`year ${req.params.year} and month ${req.params.month}`);
// });
// app.get('/app/course/id/:id',(req,res)=>{
//     res.send({courese:"science,math,social"});
// })
// app.get('/app/posts/:year/:month',(req,res)=>{
//     res.send(`Year ${req.params.year} ${req.params.month}`)
// })
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// const express=require('express');
// const app=express();
// app.use(express.json());
// const course=[
//     {id:107,name:'Biology'},
//     {id:106,name:'Math'},
//     {id:105,name:'Geology'},
//     {id:104,name:'Nepali'},
// ];
// app.get('/course',(req,res)=>{
//     res.send(course);
// })
// app.post('/course',(req,res)=>{
//     const courses={
//         id:course.length+1,
//         name:req.body.name,
//     }
//     course.push(courses);
//     res.send(course);
// })
// app.get('/course/:id',(req,res)=>{
//     const result=course.find(ca=>ca.id===parseInt(req.params.id));
//     if(!result){
//         return res.status(404).send('the id you are looking is not found')
//     }else{
//         res.send(result);
//     }
// })
   
// const ports=process.env.PORT||3000;
// app.listen(ports,()=>{
//     console.log(`server is running on 3000 ${ports}`);
// })
// const Joi=require('joi');
// const express=require('express');
// const app=express();
// app.use(express.json());
// const course=[
//     {id:107,name:'Biology'},
//     {id:106,name:'Math'},
//     {id:105,name:'Geology'},
//     {id:104,name:'Nepali'},
// ];
// app.get('/course',(req,res)=>{
//     res.send(course);
// });
// app.post('/course',(req,res)=>{
//     const courses={
//         id:course.length+1,
//         name:req.body.name,
//     }
//     course.push(courses);
//     res.send(course);   
//     });
//     app.post('/course',(req,res)=>{
//         const Schema={
//             name:Joi.string().min(3).required()
//         };
//         const result=Joi.validate(req.body,Schema);
//         console.log(result);
//             if(!req.body.name || req.body.name>3){
//                 res.status(404).send("character must be more than three");
//                 return;                
//             }
//     })   
//     // app.get('/course/:id',(req,res)=>{
//     //     const result=course.find(ca=>ca.id===parseInt(req.params.id));
//     //     if(!result){
//     //         return res.status(404).send('the id you are looking is not found')
//     //         }else{
//     //             res.send(result);
//     //             }
//     //             });
//                 const ports=process.env.PORT||3000;
//                 app.listen(ports,()=>{
//                     console.log(`server is running on  ${ports}`
//                         );
//  })
// const Joi = require('joi');
// const express = require('express');
// const app = express();

// app.use(express.json());

// const courses = [
//     { id: 107, name: 'Biology' },
//     { id: 106, name: 'Math' },
//     { id: 105, name: 'Geology' },
//     { id: 104, name: 'Nepali' },
// ];

// // Get all courses
// app.get('/course', (req, res) => {
//     res.send(courses);
// });

// // Add a new course
// app.post('/course', (req, res) => {
//     // Validate request body using Joi
//     const schema = Joi.object({
//         name: Joi.string().min(3).required()
//     });

//     const { error } = schema.validate(req.body);

//     if (error) {
//         res.status(400).send(error.details[0].message);
//         return;
//     }

//     const newCourse = {
//         id: courses.length + 1,
//         name: req.body.name,
//     };

//     courses.push(newCourse);
//     res.send(courses);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
// const express = require('express'); // Corrected from 'required' to 'require'
// const app = express();
// const Joi = require('joi'); // Ensure correct capitalization
// app.get('/Schema',(req,res)=>{
//         res.send(Schema);
// })

// const Schema = Joi.object({
//     name: Joi.string().min(3).required(),
//     age: Joi.number().integer().min(0).required(),
//     email: Joi.string().email().required()
// });

// const data = {
//     name: 'Rajesh',
//     age: 20,
//     email: 'rajesh@gmail.com'
// };

// const { error, value } = Schema.validate(data);

// if (error) {
//     console.error('Validation error:', error.details);
// } else {
//     console.log('Correct data:', value);
// }

// const port = process.env.PORT || 3000; // Corrected 'processing.env.PORT' to 'process.env.PORT'
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
// const express = require('express');
// const Joi = require('joi');

// const app = express();
// app.use(express.json()); 


// const itemSchema = Joi.object({
//   name: Joi.string().min(3).required(),
//   age: Joi.number().integer().min(0).required(),
//   email: Joi.string().email().required()
// });

// //object into array
// const arraySchema = Joi.array().items(itemSchema).required();


// app.post('/validate', (req, res) => {
//   const { error, value } = arraySchema.validate(req.body);

//   if (error) {
//     return res.status(400).json({
//       message: 'Validation error',
//       details: error.details
//     });
//   }

//   res.status(200).json({
//     message: 'Valid data',
//     data: value
//   });
// });


// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express = require('express');
// const Joi = require('joi');

// const app = express();
// app.use(express.json()); // Middleware to parse JSON bodies

// // Define a schema for individual items in the array
// const itemSchema = Joi.object({
//   name: Joi.string().min(3).required(),
//   age: Joi.number().integer().min(0).required(),
//   email: Joi.string().email().required()
// });

// // Define a schema for the array
// const arraySchema = Joi.array().items(itemSchema).required();

// // POST route to validate the array
// app.post('/validate', (req, res) => {
//   const { error, value } = arraySchema.validate(req.body);

//   if (error) {
//     return res.status(400).json({
//       message: 'Validation error',
//       details: error.details
//     });
//   }

//   res.status(200).json({
//     message: 'Valid data',
//     data: value
//   });
// });

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express = require('express');
// const Joi=require('joi');
// const app = express();
// app.use(express.json.express);
// app.use(express.urlencoded());

// const courses = [
//   { id: '101', name: 'science' },
//   { id: '102', name: 'Biology' },
//   { id: '103', name: 'Maths' }
// ];

// app.get('/courses', (req, res) => {
//   res.send(courses);
// });
// app.post('/courses',(req,res)=>{
//   const course={
//     id:courses.length+1,
//     name:req.body.name
//   }
//   courses.push(course),
//   res.send(course)
// });

// app.get('/courses/:id', (req, res) => {
//   const coursedetails = courses.find(c => c.id === req.params.id);
//   if (!coursedetails) {
//     return res.status(404).send('The course with the given ID was not found');
//   } else {
//     return res.send(coursedetails);
//   }
// });
app.use('/courses', course);
app.use('/',home);
app.set('view engine',pug);
app.set('views','./views');
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// const express = require('express');
// const Joi = require('joi');

// const app = express();
// app.use(express.json());

// const schema = Joi.object({
//   name: Joi.string().min(3).required(),
//   age: Joi.number().integer().min(0).required(),
//   email: Joi.string().email().required()
// });

// app.post('/validate', (req, res) => {
//   const { error, value } = schema.validate(req.body);

//   if (error) {
//     return res.status(400).json({
//       status: 'fail',


      
//       message: error.details
//     });
//   }

//   // If no validation errors, send success response
//   res.status(200).json({
//     status: 'success',
//     data: value
//   });
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express=require('express');
// const app=express();
// const Joi=require('joi');
// app.use(express.json());
// app.use(express.urlencoded({extended:true}))
// app.use(express.static('public'));
// const courses=[
//   {id:1,name:'course1'},
//   {id:2,name:'course2'},
//   {id:3,name:'course3'},
//   {id:4,name:'course4'},
//   {id:5,name:'course5'}
// ]
// app.get('/courses',(req,res)=>{
//    res.send(courses);
// });
// app.post('/courses', (req, res) => {
//   const schema = Joi.object({
//     name: Joi.string().required(),
//     id: Joi.number().integer().required(),
//   });

//   const { error } = schema.validate(req.body);

//   if (error) {
//     // Return the first validation error message from Joi
//     return res.status(400).send(error.details[0].message);
//   }

//   const course = {
//     id: courses.length + 1,
//     name: req.body.name
//   };

//   courses.push(course);
//   res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
