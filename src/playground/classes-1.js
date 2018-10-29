class Person{
    constructor(name = 'Anonymous' , age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi ${this.name}` 
    }

    getDescription() {
        return ` ${this.name} is  ${this.age} years old.`
    }
}

// class Student extends Person {

//     constructor(name, age, major) {
//         super(name, age )
//         this.major = major
//     }

//     hasMajor() {
//         return !!this.major;
//     }
    
//     getDescription() {
//         let description = super.getDescription();
        
//         if(this.hasMajor()){
//             description  +=  `Their major is ${this.major}` ;
//         }

//         return description
//     }
// }


class Traveler extends Person {
    constructor (name, age, homeLocation ){
        super(name, age)
        this.homeLocation = homeLocation
    }

    hasLocation(){
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasLocation()){
            greeting += `I'm vising from ${this.homeLocation}`
        }

        return greeting
    }

}

const me = new Traveler( 'Andrea Fred ', 21, 'ATL'); 
console.log(me.getGreeting())




const other = new Traveler();
console.log(other)