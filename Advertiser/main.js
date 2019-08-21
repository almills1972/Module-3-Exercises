const data = require('../class-2-data.json')
const advertiser = require('./advertiser.js')
const _ = require('lodash')

const littleGirl = data.map(function(e) {
    if(e.sex === "F" && e.age < 30)
        return _.replace(e.name, e.name, `To the little girl named ${e.name}`)             
    
})


advertiser.printAdvertiser(littleGirl)

    


   
    