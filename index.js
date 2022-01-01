/////////////////////////////////////////////////////////////////////////////////////////////
//Files


// const fs = require('fs');
// const TextIn=fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(TextIn);

// const TextOut=`This is what we know about the avocado: ${TextIn}.\nThe file is created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',TextOut);
// console.log("File has been written");

// fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
//     console.log(data);
// })
// console.log('Will Read me first!');

// const fs= require('fs')
// fs.readFile('./txt/start.txt','utf-8',(err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err ,data2) => {
//         console.log(data2);
    
//     fs.readFile('./txt/append.txt','utf-8', (err, data3) => {
//         console.log(data3);
//     fs.writeFile('.txt/final.txt', `${data2}\n${data3}`,'utf-8',err =>{
//         console.log("File has been written\n");
//     });
//     });
//     });
// });

// console.log("Will Print me first");

/////////////////////////////////////////////////////////////////////////////////////////////////
//Server creation


const  fs = require('fs');
const http=require('http');

const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj=JSON.parse(data);

const server=http.createServer((req,res)=>{
    const pathName= req.url;
    if(pathName==='/'){
        res.end('HELLO FROM THE OTHER SIDE!');
        console.log(req.url);
    }
    else if (pathName==='/overview'){
        res.end('WELCOME TO OVERVIEW');
        console.log(req.url);
    }
    else if (pathName==='/product'){
        res.end('WELCOME TO PRODUCT');console.log(req.url);
    }
    else if(pathName=='/api'){
            res.writeHead(200,{
                'Content-type': 'application/json'
            });
            res.end(data);
        }
    
    else{
        res.writeHead(404);
        res.end('PAGE NOT FOUND!');
        console.log(req.url); 
    }
    
});

server.listen(8000,'127.0.0.1', () =>{
    console.log('listening to request on the port 8000');
});

