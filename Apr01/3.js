var student = {
    name : "Jocob",
    sclass : "VI",
    rollno : 12 };

console.log(student.name);
console.log(student.sclass);
console.log(student.rollno);
console.log(student);
delete student.rollno;
console.log(student);
console.log(Object.keys(student).length); 