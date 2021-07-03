//Q1 :

/* var rightnow=new Date()
document.write(rightnow); */


// Q2 :



/* function greet(fname,lname){
    alert("welcome" +" " +firstname+lastname)
}

var firstname=prompt("Enter your first name")
var lastname=prompt("Enter your last name")

greet(firstname,lastname) */

//Q3 :



/* function add(){
   var a =+prompt("Enter Number here")
   var b =+prompt("Enter Number here")
   var sum= a+b;
return sum;
}
alert(add()); */


// Q4 :


/* function calcultor(num1,num2,operator){
    if(operator === "+")
    result=num1+num2
    else if(operator === "-")
    result=num1-num2
    else if(operator === "/")
    result=num1/num2
    else if(operator === "*")
    result=num1*num2 
    return result;
}

var firstValue = Number(prompt("First Value"))
var lastValue = Number(prompt("second Value"))
var opera = prompt("Operator");
var showResult = eval(firstValue,lastValue,opera);
document.write("Result is " +showResult); */


// Q7 :

/* var start=prompt("Enter start value");
var end =prompt("Enter last value");

function count(){
    for(var i = start; i<= end ; i++)
    document.write(i+"<br>")
}
count() */


// Q9 :



/* function rectangle(l,b) {
    var area=l*b
    alert(area);
}
rectangle(6,7); */



//Q10:



/* function palindrome(){
    var word = prompt("Enter words")  
    var check ="";
    for ( var i = word.length -1 ; i >= 0 ; i--){
        check +=word[i]; 
    }
    if (word===check){
        alert(word+ " is palindrome word")
    }
    else {
       alert("your word is not palindrome")
        
    }
    
}
palindrome() */




//Q 11

/* var a ="write here";
for ( var i =0 ; i=a.length;i++)
{
  if(a[i] == " ")
 a=a.slice(i+1,i+2).toUpperCase()
document.write(a) */



// Q14:


function circumference(radius){
    var y = (Math.PI* radius) *2;
    document.write("The circumference is" +y+ ".");

}
function area(radius){
    var x = (Math.PI * radius)*radius
    document.write("The area is" +x+ ".");

}
circumference(20);
area(10);