// primitives

// 7 types : Sting , number , boolean , null, undifined , symbol , bigint


// Refremce (Non Primitives)

// Array , objects, function


// javascript is Dynamiclly typed because same variable can store Diffrent datatypes

    const Id = Symbol('123')
    const anotherId = Symbol('123')

    console.log(Id === anotherId);

   // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

   // stack  for (Primitive data types) copy of data , Heap (Non-Primitive) refrance of value

   let userOne ={
    email : "Rahulkatara@gmail.com",
    upi : "userOne@bly"
   }

   let userTwo = userOne

   userTwo.email="kataraRahul@gmail.conm"

   console.log(userOne.email);
   console.log(userTwo.email);

