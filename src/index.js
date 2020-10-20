module.exports = function reverse (n) {
    let str=Math.abs(n).toString()
    let number =str.split("").reverse().join("")
    
    return  parseInt(number)

}

