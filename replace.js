var str = 'Now is the time, this is the tame,Now is the time, this is the tame'
var re = /t\w{2}e/g ;
var replacement = str.replace(re,"place")
console.log(replacement)

var re2 = new RegExp("t\\w{2}e","g")
var replacement2 = str.replace(re2,"place")
console.log(replacement2)
