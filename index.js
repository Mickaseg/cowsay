
const userInfo = require('./information')

const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `I'm ${userInfo.name}, i'm ${userInfo.age} from ${userInfo.campus} Campus`
}))




