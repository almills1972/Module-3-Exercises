const data = require('../class-2-data.json')
const advertiser = require('./advertiser.js')

const littleGirl = data.map(function(e) {
    if(e.sex === "F" && e.age < 30)
        return e.name
})

advertiser.printAdvertiser(littleGirl)

    


   
    