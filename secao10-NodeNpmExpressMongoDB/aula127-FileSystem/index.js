//* Aula 127 - listando arquivos com FileSistem e recursão mútua

/*
    _ é uma API do node para gestão de arquivos
    _ todas as funções tem versão sincrona e assíncrona (do fs)
*/

const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath);
        
        if(/\.git/g.test(fileFullPath)) continue
        if(/\node_modules/g.test(fileFullPath)) continue

        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

        if(
            // !/\.css$/g.test(fileFullPath) && 
            !/\.html$/g.test(fileFullPath)
            ) continue


        // console.log(file, stats.isDirectory());
        console.log(fileFullPath);
    }
}

readdir('C:/Users/jeanm/Google Drive/Programação/JavaScript e TypeScript 2020/JavaScript e TypeScript 2020');

