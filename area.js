function squareArea(side) {
    return side * side
}

function rectArea(length, width) {
    return length * width
}

function circleArea(radius) {
    return radius * radius * Math.PI 
}

function triangleArea(height, base) {
    return height * base / 2
}

module.exports = {
    squareArea,                     //it's like "squareArea": squareArea,
    rectArea,
    circleArea,
    triangleArea
}