/*
oops concept--
there are certain features or mechanism which make the language object oriented.
    1.object-->as object is a inique entity that conatin propertiesand methods.
            --the object can be created in two ways in javascript.
                1.object loteral

                    let person={
    first_Name:"nazi",
    last_Name:"mahanta",
    
    getFunction:function(){
        return(`the name of the person is ${person.first_Name} ${person.last_Name}`)
    },
    phone_number:{
        mobile:'1265478943',
        lant_line:'1297654322'
    }
    }
    console.log(person.getFunction());
    console.log(person.first_Name);
    console.log(person.last_Name);
    console.log(person.phone_number.lant_line);


                2.object constructor
                        //this is the constructor
    function Person(first_name,last_name){
    this.first_name=first_name;
    this.last_name=last_name;

    }
    let person1=new Person(`mahanta`,`nazi`);
    let person2=new Person(`mangaraj`,`gugu`);
    
    console.log(person1.first_name);
    console.log(`${person2.first_name}${person2.last_name}`);


    2.class-->
            class is a blueprint of object. a class have many objects because the class is template while 
            objects are inheritance of the class or the concrete implementation.

            class vehicle{
    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }
    getDetails(){
        return(`the name of the bike is ${this.name}`)
    }
    }
    let bike1=new vehicle('hayabhusa','suzuki','bullet');
    let bike2=new vehicle('duke','super','350cc')


    console.log(bike1.name);
    console.log(bike2.engine);
    console.log(bike1.getDetails());
   
    3.inheritance-->inheritance  is a  property in which in inherit the property of parent class to child class
                     through extend keyword.
                     class person {
    constructor(name) {
        this.name = name;
    }
    toString() {//method to return the string
        return (`Name of person:${this.name}`)
    }
    }
    class student extends person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    toString() {//method to return the string
        return (`${super.toString()},student ID:${this.id}`);
    }
    }
    let student1 = new student('nazi', 21);//creating objects and give value
    console.log(student1.toString());

    4.encapsulation-->the process of wrapping properties and functions  within a single unit in known as encapsulation.

    5.polimorphism
    6.abstraction
*/

class person{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    add_Address(add){
        this.add=add;
    }
    getDetails(){
        console.log(`name is ${this.name},address is:${this.add}`);

    }
}
let person1=new person('nazi',22);
person1.add_Address('nemalo');
person1.getDetails();