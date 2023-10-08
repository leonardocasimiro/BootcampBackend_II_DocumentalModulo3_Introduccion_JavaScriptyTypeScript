interface User {
    name: string;
    age: number;
    subject?: string;
    occupation?: string;
  }
  
  const users: User[] = [
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

  const estudiantes: User []= [
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
  
  const logUser = ({ name, age }: User) => {
    console.log(`  - ${name}, ${age}`);
  };
  
  users.forEach(logUser);
  estudiantes.forEach(logUser);
  