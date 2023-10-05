
/**
 * Types for extremely complex objects.
 */
// List of available courses
type Classes = "Maths" | "Physics" | "Computer Science" | "Advanced English" | "Babi-Foot";

// A student in the University
type Student = {
    administrationId: string;
    lastName: string;
    firstName: string;
    attendedClasses: Array<Classes>;
};



class University {

    name: string;
    students: Array<Student>;

    constructor(name: string){
        this.name = name
        this.students = new Array<Student>;
    }

    get studentPromotion(){
        return this.students
    }

    addStudent(student: Student): void{
        this.students = [...this.students, student]
    }
   
    removeStudent(administrationId: string): void {
        this.students = this.students.filter((student) => {return student.administrationId === administrationId})
    }

    getStudent(administrationId: string): Student | undefined {
        return this.students.find((student) => {return student.administrationId === administrationId})
    }
}


// A Professor in the University
type DoctoralStudent = {
    administrationId: string;
    lastName: string;
    firstName: string;
    attendedClasses: Array<Classes>;
    salary: number;
};
const robert: Student = {
    administrationId: "452115r",
    firstName: "DELACREUSE", 
    lastName: "Robert", 
    attendedClasses: ["Computer Science", "Babi-Foot"]
}
const nathan: DoctoralStudent = {
    administrationId: "559151d",
    firstName: "D", 
    lastName: "Nathan", 
    attendedClasses: [ "Babi-Foot"],
    salary: 2100
}
const university = new University("Web Master"); // instantiation of a new university
university.addStudent(robert) // works
university.addStudent(nathan) // also works



type Academics = Student | DoctoralStudent







type Teacher = {
    administrationId: string;
    lastName: string;
    firstName: string;
    ClassesGiven: Array<Classes>;
    salary: number;
};

const bob: Teacher = {
    administrationId: "452115d",
    firstName: "SINCKLAR", 
    lastName: "Bob", 
    ClassesGiven: ["Computer Science", "Babi-Foot"],
    salary: 3000
}
university.addStudent(bob) // Does not works