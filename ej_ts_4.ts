
interface Student{
      name: string;
      age: number;
      occupation: string;
}

const students: Student[] = [
    {
      name: "Luke Patterson",
      age: 32,
      occupation: "Internal auditor",
    },
    {
      name: "Emily Coleman",
      age: 25,
      occupation: "English",
    },
    {
      name: "Alexandra Morton",
      age: 35,
      occupation: "Conservation worker",
    },
    {
      name: "Bruce Willis",
      age: 39,
      occupation: "Placement officer",
    },
  ];

  const filterStudentsBy = (students: Student[], criteria: Partial<Student>): Student[] => {
    return students.filter((student) => { //del array de estudents, filtra por estudent y devuelve un nuevo array
      const criteriaKeys = Object.keys(criteria); // cojemos el criterio que nos pasen, en este caso uno...pero podrian ser mas
      return criteriaKeys.every((fieldName) => { //iteramos por cada criterio (fieldName) del array criteriaKeys, o array de criterios vallidos
        return criteria[fieldName] === student[fieldName]; //si valor de criteria.age es igual que el student del array de stucdents age is true y devuelve true, que retornará recursivamente llegando a filter con lo que solo los true perteneceran al array devuelto
      });
    });
  };
  
  
  const logStudent = ({ name, occupation }: Student) => {
    console.log(`  - ${name}, ${occupation}`);
  };
  
  console.log("Students of age 35:");
  filterStudentsBy(students, { age: 35 }).forEach(logStudent);
  
  