import express from 'express';
import mustache from 'mustache-express';
import dotenv from  'dotenv';
import path from 'path';
import router from './routes/routes'
dotenv.config();

const server = express();

server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache',mustache());

server.use(express.static(path.join(__dirname,'../public')));

server.use(express.urlencoded({extended:true}));

server.use(router);

server.use((req,res)=>{
  res.render('pages/notFound');
});


server.listen(process.env.PORT,()=>console.log('Server started!'));



