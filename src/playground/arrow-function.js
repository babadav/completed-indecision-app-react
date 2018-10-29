// const square = function(x){
//     return x * x 
// }

// const squareArrow = (x) => {
//     return x * x
// }

// console.log(squareArrow(5))

// const squareArrow = (x) => x * x;

// console.log(squareArrow(5))

// const getFirstName = (name) =>{
//     return name.split(' ')[0]
// }

// console.log(getFirstName('Freddy Mercury'))

// arguments object - no longer bound with arrow functions
//this keword - no longer bound by arrow functions

const add = (a, b) => {
    // console.log(arguments)
    return a + b
}

console.log(add(55,1))

const user ={ 
    name: 'David',
    cities: ['Atlanta', 'SD', 'Alpharetta'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city )
    }
}
console.log(user.printPlacesLived());


const multiplier = {
    numList: [3, 6, 7,],
    multiplyBy: 5,
    multiply() {
        return this.numList.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())