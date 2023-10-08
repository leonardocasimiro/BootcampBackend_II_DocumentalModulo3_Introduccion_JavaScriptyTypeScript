const compact = (arg) => {
    // Verificar si es un array
    if (Array.isArray(arg)) {
      // Utilizar filter para eliminar elementos falsys del array
      return arg.filter((element) => element);
    }
  
    // Verificar si es un objeto
    if (typeof arg === 'object' && arg !== null) {
      // Utilizar reduce para eliminar propiedades falsys del objeto
      return Object.keys(arg).reduce((acc, key) => {
        if (arg[key]) {
          acc[key] = arg[key];
        }
        return acc;
      }, {});
    }
  
    // Si no es ni un objeto ni un array, devolver el argumento original
    return arg;
  };
  
  // Ejemplos de uso
  console.log(compact(123)); // 123
  console.log(compact(false)); // null
  console.log(compact(null)); // null
  console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
  console.log(compact({})); // {}
  console.log(compact({ price: 0, name: "cloud", altitude: NaN, taste: undefined, isAlive: false })); // { name: 'cloud' }
  