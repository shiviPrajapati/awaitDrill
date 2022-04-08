
const fs = require('fs')
const path = require('path')

let Path = path.join(__dirname, './dir1')


async function createDir(Path) {
    return fs.promises.mkdir(Path)
    .then(() => "director created")
    .catch((err) => err)
}


async function createFile(filepath, data) {
    return fs.promises.writeFile(filepath, data, 'utf-8')
    .then(() => filepath)
    .catch((err) => err)
   
}


async function deleteFile(filepath) {
    return fs.promises.unlink(filepath)
        .then(() => (filepath))
        .catch((err) => err)
}




async function call(filePath, msg){
await createDir(Path).then((res) => console.log(res))
await createFile(filePath, msg ).then((res) => console.log("file created:",res))
await deleteFile(filePath).then((res) => console.log("file deleted:", res))
}




module.exports = {call}