// os is a built-in module so you do not need to include ./ in the path
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system uptime is ${(os.uptime() / 60) / 60} hours`)

const currentOS = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS)