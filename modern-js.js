
function greet(name, faculty) {
  return "สวัสดี " + name + " จากคณะ " + faculty + "!";
}

const greet_modern = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;

//console.log(greet("Peter", "วิศวกรรมศาสตร์"));
//console.log(greet_modern("Peter", "วิศวกรรมศาสตร์"));

const student = { name: "ฟ้า", faculty: "CITU", year: 2 };
const { name, faculty } = student;          // ดึงค่าออกมาเป็นตัวแปร
console.log(student);
const updated = { ...student, year: 3 };    // copy แล้วแก้บางค่า
console.log(name, faculty, updated);

const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
  { route: "NGV-4", passengers: 51, late: false },
];
//แบบ ES5
for(let i = 0; i < buses.length; i++) {
    console.log(buses[i].route, buses[i].passengers, buses[i].late);
}
//แบบ ES6
for(const bus of buses) {
    console.log(bus.route, bus.passengers, bus.late);
}
//map
const routes = buses.map(
  ({ route, passengers }) => `${route} มีผู้โดยสาร ${passengers} คน`
);
console.log(routes);
//filter
const lateBuses = buses.filter(({ late }) => late==true);
const heavyBuses = buses.filter(({ passengers }) => passengers > 50);

console.log(lateBuses);
console.log(heavyBuses);
//reduce
const totalPassengers = buses.reduce(
  (total, { passengers }) => total + passengers,
  0
);

const PassengersTotalofHeavybuses = buses
  .filter(({ passengers }) => passengers > 50)
  .reduce((total, { passengers }) => total + passengers, 0);
console.log(totalPassengers);
console.log(PassengersTotalofHeavybuses);