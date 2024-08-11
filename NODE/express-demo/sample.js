
const express=require('express');
const Joi=require('joi');
const app=express();
app.use(express.json());
const genres=[
    {id:1,name:'Action'},
    {id:2,name:'Comedy'},
    {id:3,name:'Drama'}
    
];
app.get('/genres',(req,res)=>{
    res.send(genres);
});
app.post('/genres',(req,res)=>{
   const{error}=validateGenres(req.body);
   if(error) return res.status(400).send(error.details[0].message);
   const genre={
    id:genres.length+1,
    name:req.body.name
};
genres.push(genre);
res.send(genre);
});
app.put('/genres/:id',(req,res)=>{
    const genre=genres.find(g=>g.id===parseInt(req.params.id));
    if(!genre) return res.status(404).send('The genre with the given id was not found');
    const{error}=validateGenres(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    genre.name=req.body.name;
    res.send(genre);
    });
    app.delete('/genres/:id',(req,res)=>{
        const genre=genres.find(g=>g.id===parseInt(req.params.id));
        if(!genre) return res.status(404).send('The genre with the given id was not found')
            const index=genres.indexOf(genre);
            genres.splice(index,1);
            res.send(genre);
            });
            function validateGenres(genre){
                const schema={
                    name:Joi.string().min(3).required(),
                    id:Joi.number().integer().min(0).required()
                    };
                    return Joi.validate(genre,schema);
                    }
                    const port=process.env.PORT||3000;
                    app.listen(port,()=>{
                        console.log(`Listening on port ${port}`);
});
