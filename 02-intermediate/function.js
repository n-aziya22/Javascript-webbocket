// /* function:
// --definition: a javascript function is a block of code designed to perform a particular task.
//             a javascript function is executed when something invoked it(call it).
//              */
//             function sayname(){
//                 console.log("g");
//                 console.log("u");
//                 console.log("g");
//                 console.log("u");
//             }
//             sayname();
//             //sayname-reference
//             //()-execution

//             function addTwoNumber(number1,number2){  //parameter
//                 console.log(number1+number2)
//             }
//             addTwoNumber(3,"a");   //argument
//             addTwoNumber(3,4);   


//             function addTwoNumber1(number1,number2){
//                 let result=number1+number2;
//                     return result;
//             }
//             const result=addTwoNumber1(3,5);
//             console.log("result:",result);


//             function loginUserMessage(username){
//                 return `${username} just logged in`
//             }
//             console.log(loginUserMessage());






//             function loginUserMessage(username){
//                 if(username=== undefined)
//             {
//         console.log("please enter your username")
//         }
//         return`${username}just logged in`;
//     }
//     console.log(loginUserMessage());




//     function loginUserMessage(username="mano"){
//         if(!username)
//     {
// console.log("please enter your username")
// return
// }
// return`${username}just logged in`;
// }
// console.log(loginUserMessage("nazi"));
// console.log(loginUserMessage("mahanta"));





// function calculateprice(num1){
//     return num1;

// }
// console.log(calculateprice(200,300,400,500));




// function calculateprice(...num1){ //...rest operater
//     return num1;

// }
// console.log(calculateprice(200,300,400,500));



// function calculateprice(val1,val2,...num1){ //...rest operater
//     return val1;//multiple value  cant return ones atime

// }
// console.log(calculateprice(200,300,400,500));


const user={
    username:"gift",
    price:400
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user);


