const { writeFileSync, readFileSync} = require('fs')

const firstLine = readFileSync('./content/first.txt', 'utf-8')
const secondLine = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/final.txt', `First: ${firstLine}\nSecond: ${secondLine}\n`, {flag: 'a'})