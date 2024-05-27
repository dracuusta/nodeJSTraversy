import {createServer} from 'http';
import dotenv from 'dotenv';
dotenv.config();
const PORT=process.env.PORT;


const users=[
    {id:1,name:'John Doe'},
    {id:2,name:'Shashwat'},
    {id:3,name:'don gustavo'}
]

//logger middleware
const logger=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}

//JSON middleware
const jsonMiddleware=(req,res,next)=>{
    res.setHeader('Content-Type','application/json'); 
    next();
}

//Route handler for GET /api/users
const getUsersHandler=(req,res)=>{
    res.write(JSON.stringify(users));
    res.end(); 
}

//Not found handler
const notFoundHandler=(req,res)=>{
    res.statusCode=404;
    res.write(JSON.stringify({message:'Route not found'}));
    res.end(); 
}

const server=createServer((req,res)=>{
    logger(req,res,()=>{
        jsonMiddleware(req,res,()=>{
            if(req.url==='/api/users'&&req.method==='GET'){
                getUsersHandler(req,res);
            }else{
                notFoundHandler(req,res);
            }
        })
    })
   
})

server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

