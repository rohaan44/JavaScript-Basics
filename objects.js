// let employee = {name: "Rohaan", Id:14, cast: "Shaikh"}
// console.log(employee.name);//access individual
// console.log(employee.Id);
// //Second Method
// console.log(employee["cast"]);



// console.log(employee);//access all together

// let emp = {name: "Rohaan",Cast: "Shaikh"}
// emp.Id=90978
// emp.UserName="Roha._an"
// console.log(emp);
// for (let x in emp) {
//     console.log(Object.values(emp));
// }
// const myObject = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
//   };
  
//   for (const [key, value] of Object.entries(myObject)) {
//     console.log(`Key: ${key}, Value: ${value}`);
//   }

let emp = {name: "Rohaan", Id:14, cast: "Shaikh"}
for (const [key,value] of Object.entries(emp)) {
    console.log(`Key: ${key}, Value: ${value}`);
}