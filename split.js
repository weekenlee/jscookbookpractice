var string = 'This is a list of items: cherries, limes, oranges, apples. '
var ls=[]

var start = string.indexOf(":")
var end = string.indexOf(".")
var subs = string.substring(start + 1,end)
console.log(subs)

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
}

ls = subs.split(/\s*,\s*/)
console.log(ls)
/*
ls = subs.split(",")
ls.forEach(function(e,index,array){
    array[index] = array[index].trim()
});
console.log(ls)

for(var i in ls) {
    ls[i] = ls[i].trim()
}
console.log(ls)
*/
