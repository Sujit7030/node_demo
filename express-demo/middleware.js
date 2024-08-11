// const express=require('express');
// const logger=require('./logger');
// const Joi=require('joi');
// const app=express();
// //Application-level middle ware
// app.use(express.json());//parse jason bodies
//custom level middlware
// app.use((req,res,next)=>{
//     console.log(`Today date is ${Date.now()}`);
//     next();
// });
// app.use(logger);
// app.use((req,res,next)=>{
//     console.log('Authenticating..');
//     next();
// });


// //routes level middle ware
// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });
// const port=process.env.PORT||3000;
// app.listen(port,()=>{
//     console.log(`Listening on port ${port}`);
// });
 const startupDebbuger=require('debug')('app:startup');
 const dbDebbuger=require('debug')('app:db') 
const express=require('express');
const config=require('config');
const session=express('express-session');
const helmet=require('helmet');
const morgan=require('morgan');
const app=express();
app.set('views engine','pug');
app.set('views','./views');
const Joi=require('joi');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(helmet())
//for configrequire
console.log("application app:", config.get('name'));
 console.log("mail server:", config.get('mail.host'));


if(app.get('env')==='development'){
  app.use(morgan('tiny'));
  startupDebbuger('morgan enabled...');
}
dbDebbuger("connect to databse ....");
console.log(`node_env:${app.get('env')}`);
const courses=[
  {id:1,name:'course1'},
  {id:2,name:'course2'},
  {id:3,name:'course3'},
  {id:4,name:'course4'},
  {id:5,name:'course5'}
]
// app.get('/',(req,res)=>{
//   res.send('index',{title:'this is expres',message:'hii'});
// })
app.get('/', (req, res) => {
  res.render('index', { title: 'this is express', message: 'hii' }); 
});
app.get('/courses',(req,res)=>{
   res.send(courses);
});
app.post('/courses', (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    id: Joi.number().integer().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    // Return the first validation error message from Joi
    return res.status(400).send(error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };

  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
