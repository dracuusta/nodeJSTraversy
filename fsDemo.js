import fs from 'fs/promises';

// const readFile=async ()=>{
// try{
//     const data=await fs.readFile('./text.txt','utf8');
//     console.log(data);
// }catch(error){
// console.log(error);
// }
// }

// readFile();

const writeFile=async ()=>{
    try{
        await fs.appendFile('./text.txt','Shashwat wrote this','utf8');
    }catch(error){
        console.log(error);
    }
}
writeFile();