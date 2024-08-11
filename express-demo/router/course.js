const express = require('express');
const Joi=require('joi');
const router = express.Router();
router.use(express.json.express);
router.use(express.urlencoded());

const courses = [
  { id: '101', name: 'science' },
  { id: '102', name: 'Biology' },
  { id: '103', name: 'Maths' }
];

router.get('/courses', (req, res) => {
  res.send(courses);
});
router.post('/courses',(req,res)=>{
  const course={
    id:courses.length+1,
    name:req.body.name
  }
  courses.push(course),
  res.send(course)
});

router.get('/courses/:id', (req, res) => {
  const coursedetails = courses.find(c => c.id === req.params.id);
  if (!coursedetails) {
    return res.status(404).send('The course with the given ID was not found');
  } else {
    return res.send(coursedetails);
  }
});

module.exports=router;