// Javascript Daily Dose ==========
const a1 = "3" + "3"; //33 Concatination
const a2 = "3" - "3"; //0
const a3 = 3 + "3"; //33
const a4 = 3 - "3"; //0
const a5 = 3 + +"3"; //6
const a6 = 3 - -"3"; //6

console.log(a1, a2, a3, a4, a5, a6);

//Spead vs Rest Operator ===================================

//Spread - UnPacking
const arr = [1, 2, 3];
console.log(...arr);

const str = "Subha";
console.log([...str]);

//REST - packing
const func = (...data) => {
  console.log(data);
};
func(1, 2, 3, 4);

//

//qstn- ?REST
const data = {
  name: "asd",
  password: "asd",
  date: "asd",
};

const [name, ...someData] = data;
console.log(someData);
