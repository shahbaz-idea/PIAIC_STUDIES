function createCar(manufacturer:string, modelName:string, ...args:string[]) {    
    let car = {
      manufacturer: manufacturer,
      modelName: modelName,
    };      
    for (let i = 0; i < args.length; i += 2) {
        car = {  
            ...car,          
            [args[i]] : args[i + 1]
        }
    }
    return {...car};
  }
  
  let car = createCar("Toyota", "Camry", "color", "blue", "year", "2022");
  console.log(car);
  