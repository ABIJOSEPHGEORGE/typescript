Typescript is a strongly typed superset of javascript that adds static typing to javascript

Static typing means checking the type of variable , parameters or return type in compile time

Typescript actaully allow us to check the types at compile time and also reduce the errors

Typescript provides - : 

Static Checking
Better developer experience - becuase typescript provides autocompletion , type inference and more
Code Readability and Maintainability


What is type inference - : 
 Typescript infers the type of a variable, params or a return type and it is actually infers the most suitable type for that variable
 type infers mainly based on three scenarios like
    - : When a variable is initialized
    - : When default parameters are provided
    - : when return type of a function is mentioned

What are types in typescript
 Typescript supports primitive and non primitive types and also additionaly it provides type modifiers like readOnly and partial

Difference between never and void - :
    void means it will not return anything, But even though it accept values like null or undefined
    never means a value never occur and it wont accept anyvalues and there will be no predictable end point

Typescript compiler (tsc) - :
    Typescript compiler actually converts the ts file into js file and the compiler can be configured using the tsconfig.json file
    A ts file can executed using tsc filename command

Type assertion -:
    Type assertion is also known as type casting it is method of changing the type of a variable to another
    Type assertion can be either done by using the <> brackets method or the 'as' keyword method

What is interface - :
    Interface is used to define the structure of an object.
    An interface can be extended

What is namespace -:
    Namespace is used to combine or group logical functionalities together
    it can be also used to prevent the naming conflict in typescript , nowadays its not used widely becuase of modules 
    namespace can be defined using the 'namespace' keyword

What is type annotations - :
    Type annotation is nothing but defining the typpe of variable along with it

tsconfig - :
    tsconfig is used to define the configurations of the typescript like the rootdir and outdir
    rootDir - used to specify the location of input file
    outDir - used to specify the location for compiled js file

what is mixins  - :
    mixins are used to combine functionalities from different classes into a single class

