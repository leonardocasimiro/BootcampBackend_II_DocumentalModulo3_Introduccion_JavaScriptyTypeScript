const swap = <T, U>(arg1: T, arg2: U): [U, T] => {
    return [arg2, arg1];
  };
  
  //let age: any, occupation: any;
  let age: number, occupation: string;
  
  [occupation, age] = swap(39, "engineer");
  console.log("Occupation: ", occupation);
  console.log("Age: ", age);
  