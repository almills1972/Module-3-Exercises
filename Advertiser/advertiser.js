//const data = require('../class-2-data.json')
const dateTime = require ('moment')

const date = dateTime().format("dddd, MMMM Do YYYY");

function printAdvertiser(littleGirl) {
    

    console.log("=".repeat(89))
    console.log("|"," ".repeat(3),`${littleGirl}`," ".repeat(39),"|")
    console.log("|"," ".repeat(85),"|")
    console.log("|"," ".repeat(4),"Would you like to buy your favorite toy?,"," ".repeat(38),"|")
    console.log("|"," ".repeat(4),"Just to let you know, the sale is ending",`${date}`," ".repeat(11),"|")
    console.log("|"," ".repeat(85),"|")
    console.log("|"," ".repeat(20),'Hope to see you soon!'," ".repeat(42),"|")
    console.log("|"," ".repeat(20),'Mills Toy Company'," ".repeat(46),"|")
    console.log("=".repeat(89))
}




module.exports = {
    printAdvertiser: printAdvertiser
} 