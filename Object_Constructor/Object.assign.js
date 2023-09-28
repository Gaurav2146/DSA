
class Student {
    name = "Chetan";
    getName() {
        return "My NAME IS Chetan";
    }
}

let student1 = new Student();
let student2 = new Student();

console.log(student1.getName(), "student1");//My NAME IS Chetan student1
console.log(student2.getName(), "student2");//My NAME IS Chetan student2

Student.prototype.getName = function () {
    return "My name is Gaurav";
}

console.log(student1.getName(), "student1");//My name is Gaurav student1
console.log(student2.getName(), "student2");//My name is Gaurav student2




