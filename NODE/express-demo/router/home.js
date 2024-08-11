const express=express();
const router=express.Router();

app.get('/',(req,res)=>{
    res.render('index',{title:'my express-app',message:'this is the sample of html that should '});

});
module.exports=home;