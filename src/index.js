module.exports = function reverse (n) {
    let flag = Math.sign(n)

    let str=Math.abs(n).toString()
    console.log(str)

    let number =str.split("").reverse().join("")
    // let number =flag>0?str.split("").reverse().join(""):"-"+str.split("").reverse().join("")

    return  parseInt(number)

}

