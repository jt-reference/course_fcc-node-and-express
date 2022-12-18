const { readFile, writeFile } = require('fs')

console.log('start task one')

// for asynchronous method, you need to provide a callback
// this leads to nested callbacks
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with task one')
      },
    )
  })
})
console.log('starting task two')

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

// ASYNC SYNTAX - This is a better syntax

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')

    await writeFile(
      './content/result-mind-grenade.txt',
      `This is Awesome : ${first} ${second}`,
      { flag: 'a' },
    )

    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()
