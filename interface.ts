// An interface is used to define the structure for an object
// An interface is defined using the keyword interface

interface employee {
    name:string,
    age:number
}


let obj:employee = {
    name:'abin',
    age:21,
}

// we can also extend interfaces 

interface personal extends employee {
    place : string
}

let personalDetails : personal = {
    name:'abin',
    age:20,
    place:'calicut'
}