const data = require('./class-2-data.json')

function printLetter(to) {
    // from and to Object
    // {name, street, city, state, zip}
    // =====================
    // Alvin Mills
    // 1234 NW Somewhere Dr
    // OKC OK 73105


    //             Name
    //             Address 
    //             City State Zip
    // ===========================

    console.log("===========================================")
    console.log("| ", from.name, "                                     |")
    console.log("| ", from.street, "                                     |")
    console.log("| ", `${from.city}`, `${from.state}`, `${from.zip}`, "                                     |")
    console.log("|                                                                                                 |")
    console.log("|                 ", to.name, "                                                                |")
    console.log("|                 ", to.street, "                                                                |")
    console.log("|                 ", `${to.city}`, `${to.state}`, `${to.zip}`, "                                     |")
    console.log("==========================================================================================")
}

const from = {
    name: "Al Mills",
    street: "1234 NW Somewhere Dr.",
    city: "OKC",
    state: "OK",
    zip: "73106"
}

module.exports = {
    printLetter: printLetter
} 