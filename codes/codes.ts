/**
 * Types for extremely complex objects.
 */
// List of available courses
type Classes =
  | "Maths"
  | "Physics"
  | "Computer Science"
  | "Advanced English"
  | "Babi-Foot";

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

  constructor(name: string) {
    this.name = name;
    this.students = new Array<Student>();
  }
  addStudent(student: Student): void {
    this.students = [...this.students, student];
  }
  removeStudent(administrationId: string): void {
    this.students = this.students.filter((student) => {
      return student.administrationId === administrationId;
    });
  }
  getStudent(administrationId: string): Student | undefined {
    return this.students.find((student) => {
      return student.administrationId === administrationId;
    });
  }
}

// A Professor in the University
type DoctoralStudent = {
  administrationId: string;
  lastName: string;
  firstName: string;
  classesGiven: Array<Classes>;
  salary: number;
};
const robert: Student = {
  administrationId: "452115r",
  firstName: "DELACREUSE",
  lastName: "Robert",
  attendedClasses: ["Computer Science", "Babi-Foot"],
};
const nathan: DoctoralStudent = {
  administrationId: "559151d",
  firstName: "D",
  lastName: "Nathan",
  classesGiven: ["Babi-Foot"],
  salary: 2100,
};
const university = new University("Web Master"); // instantiation of a new university
university.addStudent(robert); // works
university.addStudent(nathan); // don't works

type Academics = Student | DoctoralStudent;

// type Teacher = {
//   administrationId: string;
//   lastName: string;
//   firstName: string;
//   ClassesGiven: Array<Classes>;
//   salary: number;
// };

// const bob: Teacher = {
//   administrationId: "452115d",
//   firstName: "SINCKLAR",
//   lastName: "Bob",
//   ClassesGiven: ["Computer Science", "Babi-Foot"],
//   salary: 3000,
// };
// university.addStudent(bob); // Does not works

// basic solution
class University2 {
  name: string;
  academics: Array<Academics>;

  constructor(name: string) {
    this.name = name;
    this.academics = new Array<Academics>();
  }

  get academicsPromotion() {
    return this.academics;
  }

  addAcademic(academic: Academics): void {
    this.academics = [...this.academics, academic];
  }

  removeAcademic(administrationId: string): void {
    this.academics = this.academics.filter((academic) => {
      return academic.administrationId === administrationId;
    });
  }

  getAcademic(administrationId: string): Academics | undefined {
    return this.academics.find((academic) => {
      return academic.administrationId === administrationId;
    });
  }
}

const university2 = new University2("Web Master"); // instantiation of a new university
university2.addAcademic(robert); // works
university2.addAcademic(nathan); // works (I am too smart)

// best solution

type Academics2 = {
  administrationId: string;
  lastName: string;
  firstName: string;
};
class University3<T extends Academics2> {
  name: string;
  academics: Array<T>;

  constructor(name: string) {
    this.name = name;
    this.academics = new Array<T>();
  }

  get academicsPromotion() {
    return this.academics;
  }

  addAcademic(academic: T): void {
    this.academics = [...this.academics, academic];
  }

  removeAcademic(administrationId: string): void {
    this.academics = this.academics.filter((academic) => {
      return academic.administrationId === administrationId;
    });
  }

  getAcademic(administrationId: string): T | undefined {
    return this.academics.find((academic) => {
      return academic.administrationId === administrationId;
    });
  }
}

const university3 = new University3<Academics>("Web Master reborn"); // instantiation of a new university
university3.addAcademic(robert); // works
university3.addAcademic(nathan); // also works
// university2.addAcademic(bob); // Does works

// map filter & reduce :

const fruits = {
  apple: { color: "red", mass: 100 },
  grape: { color: "red", mass: 5 },
  banana: { color: "yellow", mass: 183 },
  lemon: { color: "yellow", mass: 80 },
  pear: { color: "green", mass: 178 },
  orange: { color: "orange", mass: 262 },
  raspberry: { color: "red", mass: 4 },
  cherry: { color: "red", mass: 5 },
};

interface Dict<T> {
  [k: string]: T;
}

// Array.prototype.map, but for Dict
function mapDict<T, S>(
  inputDict: Dict<T>,
  mapFunction: (original: T, key: string) => S
): Dict<S> {
  const outDict: Dict<S> = {};
  for (let k of Object.keys(inputDict)) {
    const thisVal = inputDict[k];
    outDict[k] = mapFunction(thisVal, k);
  }
  return outDict;
}
// Array.prototype.filter, but for Dict
function filterDict<T>(
  inputDict: Dict<T>,
  filterFunction: (value: T, key: string) => boolean
): Dict<T> {
  const outDict: Dict<T> = {};
  for (let k of Object.keys(inputDict)) {
    const thisVal = inputDict[k];
    if (filterFunction(thisVal, k)) outDict[k] = thisVal;
  }
  return outDict;
}

// Array.prototype.reduce, but for Dict
function reduceDict<T, S>(
  inputDict: Dict<T>,
  reducerFunction: (currentVal: S, dictItem: T, key: string) => S,
  initialValue: S
): S {
  let value = initialValue;
  for (let k of Object.keys(inputDict)) {
    const thisVal = inputDict[k];
    value = reducerFunction(value, thisVal, k);
  }
  return value;
}

// MAP
const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
  ...fruit,
  kg: 0.001 * fruit.mass,
  name,
}));

// FILTER
// only red fruits
const redFruits = filterDict(fruits, (fruit) => fruit.color === "red");

// REDUCE
// If we had one of each fruit, how much would the total mass be ?
const oneOfEachFruitMass = reduceDict(
  fruits,
  (currentMass, fruit) => currentMass + fruit.mass,
  0
);

// Misc

// public static <E> void funct1  (List<E> list1) {

// }

// public static void funct2(List<?> list) {

// }

//The first signature says: list1 is a List of Es.

// The second signature says: list is a List of instances of some type, but we don't know the type.
