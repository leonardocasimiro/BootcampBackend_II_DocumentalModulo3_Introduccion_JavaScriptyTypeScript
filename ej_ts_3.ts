interface User {
    name: string;
    age: number;
    subject?: string;
    occupation?: string;
  }
  
  const teachers: User[] = [
    {
      name: "Luke Patterson",
      age: 32,
      occupation: "Internal auditor",
    },
    {
      name: "Jane Doe",
      age: 41,
      subject: "English",
    },
    {
      name: "Alexandra Morton",
      age: 35,
      occupation: "Conservation worker",
    },
    {
      name: "Bruce Willis",
      age: 39,
      subject: "Biology",
    },
  ];

  const students: User []= [
    {
      name: "Patrick Berry",
      age: 25,
      occupation: "Medical scientist",
    },
    {
      name: "Alice Garner",
      age: 34,
      occupation: "Media planner",
    },
  ];
  
  const logUser = (user: User) => {
    let extraInfo: string;
    if (user.occupation) {
      extraInfo = user.occupation;
    } else {
      extraInfo = user.subject || "No extra info";;
    }

    console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
  };

  const isStudent = (user: User)=>{
    return ("subject" in user);
  };
  
  const isTeacher = (user: User)=>{
    return ("occupation" in user);
  };

console.log("Users:");
teachers.forEach(logUser);
console.log("Students:");
students.forEach(logUser);

console.log(isStudent(students[0]));
console.log(isStudent(students[1]));
console.log(isStudent(teachers [1]));
console.log(isTeacher(teachers [1]));
