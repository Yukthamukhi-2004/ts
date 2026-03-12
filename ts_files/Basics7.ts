//Utility Types
//Type 1

//Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>,
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

//Readonly and Required

//required -requires all properties from Assignment
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to database,etc.
  return assign;
};

//Readonly-cannot overwrite the properties of Assignment
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

//Record

//record for functions
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

//record for string Literals
type Student = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Student, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

//Record vth interface
interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Student, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

//Pick & Omit

//Pick-can pick some of the properties from assignment
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 89,
};

//Omit
//omit consider,what to remove from Assignment
type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

//Exclude and Extract
//used for string union and literal types

type adjustedGrade = Exclude<LetterGrades, "U">;
type highGrades = Extract<LetterGrades, "A" | "B">;

//nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

//Return Type
/* .Its primary purpose is to extract the output type of a function without you having to manually re-write or maintain 
a separate interface for that output. 
  .If you change what a function returns, any type based on ReturnType updates automatically.
  .The best time to use ReturnType is when the function's output is complex, or when the function comes from an external library you don't control.
    1.extracting "unexported" Types
    2.Redux/State management
    3.avaoiding redundency
    
  .To use ReturnType<T>, the variable T must be a function type. Specifically, it must be something TypeScript identifies as (...args: any) => any. 
  .If you try to use it on a string, object, or number, TypeScript will complain that the type does not satisfy the constraint (...args: any) => any. */

/*type newAssign = { title: string; points: number };

 const createNewAssign = (title: string, points: number):newAssign => {
  return { title, points };
};
 */
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);

//Parameters
//which derive a type from function

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["generics", 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

//Awaited-help us with the ReturnType of a Promise
/* .Awaited is like a "Type Unwrapper."
   . It handles nested promises. If a function returned Promise<Promise<string>>, 
   Awaited would still drill down to just string.
   .If you only used ReturnType, your variable would be stuck as a Promise.
   */

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
fetchUsers().then((users) => console.log(users));
