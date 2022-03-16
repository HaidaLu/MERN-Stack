/*  // 1. file system - sync 
const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/result-sync.txt', // path
    `Here is the result: ${first}, ${second}`, // content 
    {flag: 'a'} // append
)
console.log('done with this task')
console.log('starting the next one')
 */

// 2. file system -async
/* const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')
console.log('start')

readFile('./content/first.txt', 'utf-8', (err, result)=>{
    if(err) {
        console.log(err)
        return 
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result)=> {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`, // content 
            (err, result) => {
                if(err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting the next task') */


//3. Create big file
/* const {writeFileSync} = require('fs')
for (let i = 0; i < 10000; i++) {
    writeFileSync(`./content/big.text', 'hello world ${i}\n`, {flag:'a'})
}
 */

//4. stream
const {createReadStream} = require('fs')
const stream = createReadStream('./content/big.txt')

stream.on('data', (result)=> {
    console.log(result)
})
stream.on('error', (err)=>console.log(err))
