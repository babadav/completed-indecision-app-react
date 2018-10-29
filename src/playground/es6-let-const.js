
// var nameVar = "andrew"
// nameVar = ' Mike'

// console.log(nameVar)

// let nameLet = 'Jen'
// nameLet = 'julie'

// console.log('nameLet', nameLet)

// const nameConst = 'Frank'
// console.log('nameConst', nameConst);


function getPetName(){
    const petName = 'hal';
    return petName

    console.log(petName)
}

getPetName()

//Block Scoping

var fullName = 'Andrew Mead'

if(fullName){
    const firstName = fullName.split(' ')[0]
    console.log(firstName)
}
