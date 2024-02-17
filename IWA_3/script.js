
// scripts.js

import {company } from './configuration.js'
import {year} from './configuration.js'


const message = ('© ' + company + " " + year) // concating string variables//

console.log (message)


document.querySelector('footer').innerText = message
 
// nwabisa.js

firstname = "Nwabisa"
surname = "Gabe"
 role = "CEO"

var display = firstname + " " + surname + " " + role

console.log(display)

document.querySelector('#nwabisa').innerText = display
 

// johannes.js

var  firstname = "Johannes"
var  surname = "Potgieter"
var role = "Intern"

var display = firstname + " " + surname + " " + role

console.log(dispaly)

document.querySelector('#johannes').innerText = display
 

// alex.js

const firstname = "Alex"
const surname = "Naidoo"
const role = "Head of Marketing"

const display= firstname + " " + surname + " " + role 

console.log(display)

document.querySelector('#alex').innerText = display
 

// scripts.js

console.log('Roles:'('${nwabisa}. ${johanes}. ${alex}.')