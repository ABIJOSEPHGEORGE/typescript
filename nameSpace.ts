// namespace is actually used to group logical functions together
// namespace's can be also used to avoid naming conflict and it is defined using namespace keyword
// nowadays namespace is not actually widely used intead modules are used

namespace myNameSpace {
    export function sum(num1:number,num2:number):number{
        return num1+num2;
    }

    export function multiplication(num1:number,num2:number):number{
        return num1+num2;
    }
}


console.log(myNameSpace.sum(10,20));
console.log(myNameSpace.multiplication(20,30));

