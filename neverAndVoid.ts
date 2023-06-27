// The void means it never returns a value ex a function that never return anything
// void actually accept undefined and null but never will not accept any value
// never means a value never occur

export function sum(num1:number,num2:number):void {
    console.log(num1+num2);
}


export function multiplication(num1:number,num2:number):never{
    // there  should be no recheable point
    while (true) {
        console.log(num1*num2)
    }
}

// never also can be used for function that always throws an error

export function error():never {
    throw new Error('something went wrong')
}