// const express = require('express');
// const path = require('path');
// const fs = require('fs'); // Add file system module

// const app = express();

// // const viewsPath = path.join(__dirname, 'views');
// // console.log('Views directory:', viewsPath);
// // fs.readdir(viewsPath, (err, files) => {
// //     if (err) {
// //         console.error('Error reading views directory:', err);
// //     } else {
// //         console.log('Files in views directory:', files);
// //     }
// // });

// app.set('view engine', 'pug');
// app.set('views', './views');

// app.get('/', (req, res) => {
//     res.render('index', { title: 'this is express-app', message: 'hi' });
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

//for config
// const express=require('express')
// const config = require('config');
// const app = express();
// app.set('views engine','pug');
// app.set('views','./views');
// app.get('/',(req,res)=>{
//   res.send('index',{title:"express-app",message:"Roshan gandu"});
// })
// console.log("application name:", config.get('name'));
// console.log("mail server:", config.get('mail.host'));

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const express=require('express');
const app=express();
app.set('view engine','pug');
app.set('views','./views');
app.get('/response',(req,res)=>{
    res.render('index',{title:'my express-app',message:'this is the sample of html that should '});

});
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    });

