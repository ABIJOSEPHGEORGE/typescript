// There are typpe utils like Partial<T> , ReadOnly <T> ,Pick <T,K> ,Required <T>, Omit <T,K>
// Partial actully allow us to create a type with all properties of T as optional
// Required actually allow us to create a type with all propertiesof T as Required
// ReadOnly allow us to create a type with all properties of T as ReadOnly
// Omit create a new type by excluding some peroperties from T , K could be the excluded peoperty
// Pick create a new type by picking only the specific properties from T

interface userObj {
    name : string,
    age : number,
    place :string,
    active : boolean
}

export let userOne : Required<userObj> = {
    name : 'abin',
    age :20,
    place:'wayanad',
    active:true,
}

// all fields are required


export let userTwo : Partial <userObj | "active" > ={ 
    active : false,
}

// All other fields are optional in this case

export let userThree : Readonly <userObj> = {
    name : 'abin',
    age :20,
    place:'wayanad',
    active:true,
}

//userThree.name = 'abinss' - : error wil be thrown since it is a readonly peoperty


export let userFour : Pick <userObj , "name" | "active" > = {
    name : 'abin',
    active : true
}

// in the above we are only selecting the name and active

export let userFive : Omit <userObj , "name" | "active" > = {
    age : 23,
    place : 'kerala'
}

// in the omit we are excluding or ommiting the name and active