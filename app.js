const { writeFile, readFile} = require('fs')

const firstLine = readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        return;
    }
    console.log(result);
})
const secondLine = readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
        return;
    }
    console.log(result);
})

writeFile('./content/final.txt', `First: ${firstLine}\nSecond: ${secondLine}\n`, (err, result) => {
    if (err) {
        return;
    }
    console.log(result);
})