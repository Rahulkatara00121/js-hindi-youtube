// Two ways to make object
// singalton (when object made by constructor)

//object literals
const mySum = Symbol("key1")

const jsUser = {
    name : "Rahul ",
    "surName" : "katara",
    [mySum]:"mykey1"
}

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 =  Object.assign({}, obj1 , obj2)
const obj3 = {...obj1,...obj2}
//console.log(obj3);

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course

//console.log(courseInstructor);





