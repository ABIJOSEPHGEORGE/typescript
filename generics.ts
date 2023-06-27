// Generics are used to create re usable components with multiple types


interface user <T> {
    data : T,
}

let userOne:user<string> = {
    data : 'abin'
}

let userTwo: user<number> = {
    data : 25
}

// intersection

//intersection is actually used to combine multiple types into single type it is combined using the '&' icon.

interface people {
    name:string
    place:string
    age:number
}

interface stateAndCountry {
    state:string,
    country:string,
}

type biodata = people & stateAndCountry;

let userbio : biodata = {
    name : 'abin',
    place:'wayanad',
    age:21,
    state:'kerala',
    country:'india'
}