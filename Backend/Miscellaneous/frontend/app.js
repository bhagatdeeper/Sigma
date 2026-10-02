class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};
class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
};
class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
};

let s1 = new Student("Pranjal", 19, 95);
let t1 = new Teacher("Shraddha", 25, "CS");