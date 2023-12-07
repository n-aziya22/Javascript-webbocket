/*array is a object which can store similar type of data in a contigious memory location */
/array index start from 0/
/* const myArr=[3,4,5,6,7,8,9]  array initialize and declaring.
console.log(myArr[0])    accc=essing the element.
*/

const myArr=[3,4,5,6,7,8,9] 
console.log(myArr[0])
const myArray=["gift,1,true"]
console.log(myArray[1])


/* array method*/ 
const MyArray=[1,2,3,4,5,6,7];
console.log(MyArray)
MyArray.push(8);
console.log(MyArray)
    MyArray.pop(5);
    console.log(MyArray);

    MyArray.unshift(0);     /*UNSHIFT-ADD A NEW ELEMENT IN 1ST INDEX */
    console.log(MyArray);

    MyArray.shift();
    console.log(MyArray); /*UNSHIFT- REMOVE A ELEMENT IN 1ST INDEX */
    console.log(MyArray.includes(9));
    console.log(MyArray.indexOf(7));
    console.log(MyArray);

    const demoArray=MyArray.join();     /*join- it basically works on converting a array into string */
    console.log(demoArray);
    console.log(typeof demoArray);

    console.log("A",MyArray);
    const myArray1=MyArray.slice(1,3);
    console.log(myArray1);

    console.log("B",MyArray);
    const myArray2=MyArray.splice(1,3)
    console.log(myArray2);

    const cars=["maruti","alto","xuv","wagnor"]
    const supercars=["bmw","audi","g-wagon","defender"]

    cars.push(supercars);
    console.log(cars);

    cars.concat(supercars);
    console.log(cars);
    
    const allcars=cars.concat(supercars);
    console.log(allcars);

    const allNewCars=[...cars,...supercars];
    console.log(allNewCars);

    const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5,[6,8,[9,10]]]]]
    const realAnotherArray = anotherArray.flat(Infinity);
    console.log(realAnotherArray);

    console.log(Array.isArray("gugii"));
    console.log(Array.from("gugii"));
    /*isArray is a method to check whether it is a array or not.
    from is a method in which we create that it automatically  creates a array */