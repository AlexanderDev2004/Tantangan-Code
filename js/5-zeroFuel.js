// 4/336
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//    return distanceToPump /mpg <=fuelLeft;

//   };

//   const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return fuelLeft * mpg >=distanceToPump;
 
//    };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

  console.log(zeroFuel(100, 50, 1));