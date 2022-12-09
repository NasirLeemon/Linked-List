class Person {
    constructor(name,age,dob,isMarried){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dob;
        this.isMarried = isMarried
    }
    updateName(name){
        this.name = name;
    }

}

let leeObj = new Person('Leemon', 27, 1995, false)
let nafObj = new Person('Nafis', 25, 1997, true)
nafObj.updateName('Nafis Zaman') 


console.log(leeObj);
console.log(nafObj);
