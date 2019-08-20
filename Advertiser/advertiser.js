const data = require('../class-2-data.json')

function printAdvertiser(littleGirl) {
    

    console.log("==========================================================================================")
    console.log("| ", `Hi ${littleGirl}`,"                                                                   |")
    console.log("|                                                                                        |")
    console.log("|    Would you like to buy your favorite toy?,                                           |")
    console.log("|          Just to let you know, the sale is ending                                      |")
    console.log("|                                                                                        |")
    console.log("|                 Hope to see you soon!                                                  |")
    console.log("|                 Mills Toy Company                                                      |")
    console.log("==========================================================================================")
}


module.exports = {
    printAdvertiser: printAdvertiser
} 