// enums are actually named constants
// there are three types of enums like Numeric Enums, String Enums and Heterogeneous Enums 
// Heterogeneous Enum means - : combination of Numeric and String Enums
// Enums can be defined using keyword Enums

enum colors {
    Red,
    Green,
    Blue
}

enum year {
    eligible = 2001 - 2019,
    ineligible = 2020 - 2023
}

let favouriteColor:colors = colors.Blue;
let elibilityYear : year = year.eligible;