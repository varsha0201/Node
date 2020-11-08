const fse = require('fs-extra');

const createfile = (filepath, content)=>{
    fse.outputFile(filepath, content, error =>{
        if(error){
            console.error('An error occured:', error)
        }else{
            console.log('Your file made.')
        }
    });
}

const fpath = './txt/test3.txt';
const content  = 'This is new file';

createfile(fpath, content);