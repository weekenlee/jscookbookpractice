var str1 = "this is a simple string"
var num1 = 1.45
var answer1 = true

var str2 = String("this is a simple string")
var num2 = Number(1.45)
var answer2 = Boolean(true)

var str3 = new String("this is a simple string")
var num3 = new Number(1.45)
var answer3 = new Boolean(true)

if(str1 == str2) {
    console.log("str1 == str2")
}else {
    console.log("str1 != str2")
}
if(str2 == str3) {
    console.log("str2 == str3")
}else {
    console.log("str2 != str3")
}
if(str1 === str2) {
    console.log("str1 === str2")
}else {
    console.log("str1 !== str2")
}
if(str2 === str3) {
    console.log("str2 === str3")
}else {
    console.log("str2 !== str3")
}

console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)
console.log(typeof str3.valueOf())
