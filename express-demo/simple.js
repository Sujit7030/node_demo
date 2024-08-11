// const express=require('express');
// const app=express();
// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });
// app.get('/app/:year/:month/',(req,res)=>{
//     res.send(`the year is ${req.params.year} and ${req.params.month}`);
// })
// const port=process.env.PORT||3000;
// app.listen(port,()=>{
//     console.log(`server is running on port ${port}`);
// });
const Joi=require('joi');
const express=require('express');
const app=express();
app.use(express.json());
const course=[
    {id:1,name:'Math'},
    {id:2,name:'Physics'},
    {id:3,name:'biology'}
];
app.get('/course',(req,res)=>{
    res.send(course);
});
app.use(express(


    
))
app.post('/course',(req,res)=>{
      const courses={
        id:course.length+1,
        name:req.body.name
      }
      course.push(courses);
      res.send(courses);
})
app.get('/course/:id',(req,res)=>{
    const course=course.find(c=>c.id===parseInt(req.params.id));
    if(!course){
       return res.status(404).send('the course with given id is not availabe');
    }else{
        res.send(course);
    }
});
// const express=require('express');
// const Joi=require('joi');
// const app=express();
// app.use(express.json());
// const schema=Joi.object({
//     name:Joi.string().min(3).required(),
//     age:Joi.number().integer().min(0).required(),
//     email:Joi.string().email().required()
// });
// app.get('/schema',(req,res)=>{
//     res.send(schema);
// });
// const{error,value}=schema.validate.data;
// if(error){
//     console.error('the given is false',error.details);
// }else{
//     console.log('the given data is valid',value);
// }
//  const port=process.env.PORT||3000
//  app.listen(port,()=>{
//     console.log(`server is running on port ${port}`);
//  })