// type guards are actually used for narrowing the type of a variable within a conditional block
// most common type guards include 'typeof' and 'instanceof'

interface addition {
    kind : 'addition',
    value : number,
}

interface length {
    kind : 'length',
    value : number,
}

export function StringOrValue(shape:(addition|length)){
    if(shape.kind==="addition"){
        return shape.value + 20;
    }else if(shape.kind==="length"){
        return shape.value /2 ;
    }
}

console.log(StringOrValue({kind:'addition',value:20}));
console.log(StringOrValue({kind:"length",value:24}));
