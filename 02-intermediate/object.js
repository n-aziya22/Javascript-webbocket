/*object in js
-obeject are super important for grouping the data and functionalities .so we can do a lot of things in object of js.
-object are constructed in key and value pair.
let mycars={            (name of the object)
    bmw:"series 7",       (bmw and audi is key)
    audi:"q7",              (series7 and q7 is value)
}

*/

const jsUser={
    name:"mano",
    email:"mano@google.com",
    "full name":"mahanta",
    age:"22",
    location:"odisha",
    isLoggedIn:"false",
    lastLoggedInDays:["monaday","wednesday","friday"]


}
console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);

/* if we want to chamge the existing email id */
jsUser.email="webbocket@gmail.com";
console.log(jsUser.email);

jsUser.email="gift@email.com";
console.log(jsUser.email);


/*freeze method for particular output no changes occurs */

jsUser.email="webbocket@gmail.com";
Object.freeze(jsUser);

jsUser.email="gift@email.com";
console.log(jsUser.email);


/*jsUser.greeting = function() 
{
    console.log("hello future elon musk");
}
jsUser.greetingTwo = function()
{
    console.log('hello jsuser, ${this.name}');
}
jsUser.greeting();
jsUser.greetingTwo();*/




const tinderuser={}
    tinderuser.id="1234",
    tinderuser.email="nazi@gmail.com",
    tinderuser.name="nazi"
console.log(tinderuser.id);
console.log(tinderuser.name);
console.log(tinderuser);

const regularuser={
    email:"nazi@gift.edu.in",
    fullname:{
        userfullname:{
            firstName:"nazi",
            lastName:"sk",
        }
    }
}
console.log(regularuser.fullname.userfullname);


const obj1={
1:'a',
2:'b'
}

const obj2={
    3:'a',
    4:'b'
}

const obj3={
    5:'a',
    6:'b'
}

const obj4={obj1,obj2,obj3}
console.log(obj4);
const obj5={...obj1,...obj2,...obj3}
console.log(obj5);

/*object destructing*/

const course={
    courseName:"last minute placement",
    price:9999,
    courseInstructor:"nazi"
}
const{courseInstructor:teacher}=course
console.log(teacher);



/*---json-javascript object notation
        to help  for storing dataa in our local disk and we can manipulate these dta also in one place to another place.
---api-application programming interface
        it is a mechanism that enables two software components to communicate with each other using a set of definition and protocols .*/
