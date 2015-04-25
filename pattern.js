var sstr = 'Now is the time and this is the time and that is the time'
var pattern = /t\w*e/g ;
var matcharray

var str=''

while ((matcharray = pattern.exec(sstr)) != null) {
    str += "at " + matcharray.index + " found " + matcharray[0] + "\n"
}
console.log(str)
console.log(pattern.exec(sstr))


var re = /a(p+).*(pie)/ig ;
var result = re.exec('The apples in the apple pie are tart')
console.log(result)
console.log(result.index)
console.log(result.input)
