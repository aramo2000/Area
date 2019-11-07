const reader = require('readline-sync')
const area = require("./area.js")

console.log("Supported Shapes:")
console.log("1: Circle 2: Rectange")
console.log("3: Square 4: Triangle")

const option = reader.questionInt("What is your choice? ")
let result;

switch(option) {
    case 1:
        const radius = reader.questionInt(" radius = ")
        result = area.circleArea(radius)
        break;
    case 2:
        const width = reader.questionInt(" width = ")
        const length = reader.questionInt(" length = ")
        result = area.rectArea(length, width)
        break;
    case 3:
        const side = reader.questionInt(" side = ")
        result = area.squareArea(side)
        break;
    case 4:
        const height = reader.questionInt(" height = ")
        const base = reader.questionInt(" base = ")
        result = area.triangleArea(height, base)
        break;
    default:
        console.log("Type not supported")    
}

if(result) {
    console.log("result = " + result)
} else {
    console.log("Type not supported!")
}

/*const area = require("./area.js")
const result = area.rectArea(6, 2)
console.log("result is = " + result)*/