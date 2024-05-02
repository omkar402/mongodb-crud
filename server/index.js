const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');



const app=express();
 //middleware
 app.use(bodyParser.json());
 app.use(cors());

 const port=process.env.PORT || 5000;
const posts= require('./routes/api/posts');
app.use('/api/posts',posts);
 app.listen(port,()=>console.log(`listening  on ${port}.......`))