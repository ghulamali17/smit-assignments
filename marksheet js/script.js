let nameEle = document.getElementById("name");
let stuName = prompt("Enter Your Name:");
nameEle.innerText = `Name: ${stuName}`;

let rollNoEle = document.getElementById("rollNo");
let rollNo = prompt("Enter Your Roll No:");
rollNoEle.innerText = `Roll No: ${rollNo}`;

let marksArr = [];
let subjectsName = [
  "Calculus",
  "Programming Fundamentals",
  "ICT",
  "English",
  "Applied Physics",
];

function marks() {
  for (let i = 0; i < subjectsName.length; i++) {
    let subjectMarks = prompt(`Enter your ${subjectsName[i]} marks`);
    marksArr.push(Number(subjectMarks));
  }
}

marks();

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let total = sumOfArray(marksArr);

let totalEle = document.getElementById("totalMarks");
totalEle.innerText = `Total Marks: ${total}`;

let perct = document.getElementById("perct");
let percentage = ((total / 500) * 100).toFixed(2);
perct.innerText = `Percentage: ${percentage}%`;

function calculateGrade(marks) {
  if (marks >= 90) return "A+";
  else if (marks >= 81) return "A";
  else if (marks >= 70) return "B";
  else if (marks >= 60) return "C";
  else if (marks >= 50) return "D";
  else return "F";
}


let gradeEle = document.getElementById("grade");
gradeEle.innerText = `Grade: ${calculateGrade(Number(percentage))}`;

function scholership(marks) {
  if (marks >= 90) return "You are Eligible for 30% scholarship";
  else if (marks >= 80) return "You are Eligible for 20% scholarship";
  else if (marks >= 70) return "You are Eligible for 15% scholarship";
  else if (marks >= 60) return "You are Eligible for 10% scholarship";
  else return "Not Eligible";
}

let scholarshipEle = document.getElementById("scholarship");
scholarshipEle.innerText = `Scholarship: ${scholership(Number(percentage))}`;

function tableEle() {
  let tableBody = document.querySelector("table tbody");

  for (let i = 0; i < subjectsName.length; i++) {
    let tableRow = document.createElement("tr");
    let serialCol = document.createElement("td");
    serialCol.innerHTML = i + 1;

    let subjectCol = document.createElement("td");
    subjectCol.innerHTML = subjectsName[i];

    let marksCol = document.createElement("td");
    marksCol.innerHTML = marksArr[i];
    
    let gradeCol = document.createElement("td");
    gradeCol.innerHTML = calculateGrade(marksArr[i]);

    tableRow.appendChild(serialCol);
    tableRow.appendChild(subjectCol);
    tableRow.appendChild(marksCol);
    tableRow.appendChild(gradeCol);

    tableBody.appendChild(tableRow);
  }
}

tableEle();
