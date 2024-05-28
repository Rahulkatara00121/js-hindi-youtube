//  function chai(){
//     console.log(this.username);
//  }

//  chai()

// Arrow Fumction  ()=> {}
const chai = ()=>{
    let username = "hitesh"
    console.log(this.username);
}
//chai()
// we can not use this key work in Arrow Function

// const addTwo = (num1, num2)=>{
//   return num1+num2
// }

//const addTwo = (num1, num2)=>({unsername : "rahul"})

//console.log(addTwo(1,4));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// (IIFE) Immediately Invoke Function Expresion 
// used in a file where we have Our data base connection  And i want to invoke  Immediatly

(function chai(){
    console.log('DB CONNCTED');
})();  // ; that  semicolon is important 

((name)=> {
    console.log(`Arrow Funtion used for  IIfe ${name}`);
}) ('kingo')xx