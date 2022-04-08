const fs = require('fs')
const path = require('path')


async function fileRead(file) {
   await fs.promises.readFile(file, 'utf-8')
    return ("file readed!")
}




async function convertToUpperCase(readfile, writefile) {
    let data = await fs.promises.readFile(readfile, 'utf-8')
    let value = await fs.promises.writeFile(writefile, data.toString().toUpperCase())
    console.log("Data converted to upperCase!")
    await fs.promises.writeFile('./test/filenames.txt', writefile.toString() + '\n')
     return("uppercase file name saved.")
}




async function splitIntoSentences(readfile, writefile) {
    let data = await fs.promises.readFile(readfile)
    let dataInLower = data.toString().toLowerCase();
    splitData = dataInLower.split(".").join("\n");
    await fs.promises.writeFile(writefile, splitData, 'utf-8')
    console.log("Data converted to Sentences!")
    fs.promises.appendFile('./test/filenames.txt', writefile.toString() + '\n')
    return ("split file name saved.")
}




async function sortData(fileread, filewrite) {
    let data = await fs.promises.readFile(fileread)
    data = data.toString();
    let sortdata = data.split('\n').sort().join('\n');
    await fs.promises.writeFile(filewrite, sortdata, 'utf-8')
    console.log("Data is Sorted!")
    fs.promises.appendFile('./test/filenames.txt', filewrite.toString() + '\n')
    return ("sort file name saved.")
}




async function deleteFile(readfile) {
    data = await fs.promises.readFile(readfile)
    fileNameArray = data.toString().trim().split("\n")
    fileNameArray.forEach(data => {
        fs.promises.unlink(data)
            .then(() => console.log("file deleted:", data))
            .catch(() => console.log(err))
    })
}



async function call(fileread, upperCaseFile, sentencesFile, sortDataFile, fileOfFilesname) {
    await fileRead(fileread).then((res) => console.log(res))
    await convertToUpperCase(fileread, upperCaseFile).then((res) => console.log(res))
    await splitIntoSentences(upperCaseFile, sentencesFile).then((res) => console.log(res))
    await sortData(sentencesFile, sortDataFile).then((res) => console.log(res))
    await deleteFile(fileOfFilesname)
}

module.exports = {call}