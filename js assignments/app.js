function show(){
    alert("Hello User")
}
function passErr(){
    alert("Error! Please enter a valid password")
}
function lineBreak(){
    alert("Welcome to JS Land... \n Happy Coding")
}
function sequence(){
    alert("Welcome to JS Land...")
    alert(" Happy Coding \n Prevant this page from creating addition dialogs ")
}
  let userName;

  let myName="Ghulam Ali"

 function showMsg(){
    let message;
    message="Hello world"
    alert(message)
 }
 function bioData(){
    let name="Jhon Doe";
    let age=15;
    certificate=" Certified Mobile Application Development"
    alert(name)
    alert(age + " years old")
    alert(certificate)
 }
 function pizza(){
    let pizza="PIZZA\nPIZZ\nPIZ\nPI\nP"
    alert(pizza)
 }

 function email(){
   let email="ali@gmail.com"
   alert("My email address is " + email)
 }
 function book(){
    let book="A smarter way to learn JavaScipt"
    alert("I am try to learn from the Book " + book)
 }
 function text(){
   document.write("Yah! I can write HTML content through JavaScript")
 }
 function decString(){
    let stylishString = "═════ஜ۩۞۩ஜ═════";
    alert(stylishString)
 }

 let age=23;

 function visit(){
    let visit=20;
    alert(`You have visited this website ${visit} times `)
 }
 function birthYear(){
    let birthYear=2000;
    document.write(`My birth year is ${birthYear} \n 
        Data type of my declared variable is ${typeof birthYear}.`)
 }
 function clothingStore(){
    name= "Jhon Doe";
    title="T-shirt(s)"
    quantity=5;
    document.write(` ${name} 
       ordered ${quantity} ${title} on XYZ Clothing store.`)
 }
 function variabless(){
 // 3 variables in one statement.
 var firstVar, secondVar, thirdVar;

 // Legal variable names:
 var myVar;
 var _myVar;
 var $myVar;
 var myVar2;
 var my_var;

//  Illegal variable names 
//  var 2myVar;   
//  var my-var;    
//  var my var;   
//  var @myVar;    
//  var var;  

 }

 function test(){
   let number1=+prompt("Enter First Number:")
   let number2=+prompt("Enter Second Number:")
   result=number1+number2;
   document.write("The sum of "+ number1 + " and number " + number2 + " is "+ result)
 }
 
 function sub(){
   let number1=+prompt("Enter First Number:")
   let number2=+prompt("Enter Second Number:")
   result=number1-number2;
   document.write("The substraction of "+ number1 + " and number " + number2 + " is "+ result)
 }
 
 function mul(){
   let number1=+prompt("Enter First Number:")
   let number2=+prompt("Enter Second Number:")
   result=number1*number2;
   document.write("The multiplication of "+ number1 + " and number " + number2 + " is "+ result)
 }
 
 function div(){
   let number1=+prompt("Enter First Number:")
   let number2=+prompt("Enter Second Number:")
   result=number1/number2;
   document.write("The division of "+ number1 + " and number " + number2 + " is "+ result)
 }
 
 function mod(){
   let number1=+prompt("Enter First Number:")
   let number2=+prompt("Enter Second Number:")
   result=number1%number2;
   document.write("The modulus of "+ number1 + " and number " + number2 + " is "+ result)
 }
 function uiui(){
   let variable;
alert("Value after variable declaration is:" +  variable)
 variable=5;
alert("Initial value:" +  variable)
variable++;
alert("Value after increment is: " +  variable)
variable=variable+7;
alert("Value after addition is: " +  variable)
variable--;
alert("Value after decrement is: " +  variable);

var remainder = variable % 3;

alert("The remainder is: " +  remainder);

 }
 function cost(){
let price=600;
tickets=5*price;
alert("The price of 6 tickets to a movie is " +tickets)
 }

 function table(){
   let table = 4;

   document.write(table + " x 1 = " + (table * 1) + "<br>");
   document.write(table + " x 2 = " + (table * 2) + "<br>");
   document.write(table + " x 3 = " + (table * 3) + "<br>");
   document.write(table + " x 4 = " + (table * 4) + "<br>");
   document.write(table + " x 5 = " + (table * 5) + "<br>");
   document.write(table + " x 6 = " + (table * 6) + "<br>");
   document.write(table + " x 7 = " + (table * 7) + "<br>");
   document.write(table + " x 8 = " + (table * 8) + "<br>");
   document.write(table + " x 9 = " + (table * 9) + "<br>");
   document.write(table + " x 10 = " + (table * 10) + "<br>");

 }

 function tempp() {

   let celTemp = 25;
   let fTemp = (celTemp * 9/5) + 32;
  alert(`${celTemp}°C is ${fTemp}°F`);
   fTemp = 77;
   celTemp = (fTemp - 32) * 5/9;
  alert(`${fTemp}°F is ${celTemp}°C`);

}

function shipCharges(){
   let item1Price = 200;
   let item2Price = 400;
   let quantity1 = 5;
   let quantity2 = 2;
   let shipCharges = 250;
   let total = (item1Price * quantity1) + (item2Price * quantity2) + shipCharges;
   alert("The total price is: " + total);
   
}