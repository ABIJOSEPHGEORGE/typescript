// Arrays in typescript 
// In typescript array typpe can declared in two ways either using the <type> angle brackets method or by square brackets method []

export const stringArray: string[] = ['one','two','three'];

//or using generics method ( Angle brackets method )

export const numberArray: Array<number> = [1,2,3,4,5];

// multiple types

export const multipleValue: (number|string)[] = [1,'abin',3];

// array of objects

export const arrayOfObjects: {}[] = [{name:'abin',age:20}];



// Variables in typescript

let key1 : string = 'abin';
let key2 : number = 20;
let key3:object = {};
let key4:boolean = false;


//functions in typescript

// we decalre the function params type and return type for a function

export function print(name:string):string {
    return name;
}
//with arrow functions
export const printAge = (age:number):number => {
    return age;
}