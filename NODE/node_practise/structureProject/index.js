const express = require('express');
const Joi=require('joi');
const home = require('./router/home'); // Ensure the path is correct

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api/courses', home); // Use the router

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
