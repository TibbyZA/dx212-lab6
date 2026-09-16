//datatype
let name = "Peter" ; //string
let age = 20 ; //number interger
let graduated = true; //boolean
let gpa = 3.75; //number float

//object
let student1 = { //ใส่เครื่องหมายปีกกา = object
    name : "Manee", age : 19, graduated : false, gpa : 2.65 //objecttypeเก็บค่าได้มากกว่า 1 ค่า
}; 
let student2 = { 
    name : name, age : age, graduated : graduated, gpa : gpa 
}; 

console.log(student1.name);
console.log(student2);

//array
let grades = ["A", "B", "C", "D", "F"]; //arraytypeเก็บค่าได้มากกว่า 1 ค่า
let scores = [90, 80, 70, 60, 50];
let students = [student1, student2]; //arraytypeเก็บค่าได้มากกว่า 1 ค่า and OBJECT สามารถเป็นสมาชิกของ array ได้

console.log(students[1].gpa); //เรียกใช้สมาชิกของ array ที่เป็น object

function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}

console.log(calculateGrade(90)); //เรียกใช้ function

//loop calculate
for (let i = 0; i < scores.length; i++) {
    let grade = calculateGrade(scores[i]);
    console.log(`Score: ${scores[i]}, Grade: ${grade}`);
}