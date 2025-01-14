// declare global variables 

let FirstNum = '';
let secondNum= '';
let operator= '';

//use get element id to get value from display box
let display = document.getElementById('display');
//function to capture numbers
function addNumber(num){

   if(operator ===''){
      FirstNum +=num;
      display.value=FirstNum;
      console.log(FirstNum);
   }
   else{
      secondNum +=num;
      display.value=secondNum;
      console.log(secondNum);

   }
}
// function to capture operator
function addoperator(op) 
{
 FirstNum=display.value;
 console.log(FirstNum);
 operator=op;
 console.log(operator);
} 
//function to perform calculations 
function calculate()
{
   let result=0;
   let num1= Number(FirstNum); 
   console.log(num1);
   let num2= Number (secondNum);
   console.log(num2);

   // check not a number 
   if (isNaN(num1)|| isNaN(num2)){
      display.value="Error";
      return;
   }
   if(operator === '+'){
      result = num1 + num2;

   } 
   else if(operator === '-')
   {
      result = num1 - num2;

   }
    else if(operator === '*')

{result =num1 * num2;

} else if (operator === '/')
{
   result = num2 !==0 ? num1/num2: 'Error';
}
else{
   return;
}



// update the display area with the result value 
display.value=result;
console.log(result);
FirstNum='';
secondNum='';
operator='';


}

// function to clear display area with blank spaces 
function clearDisplay()
{
   document.getElementById('display').value='';
   FirstNum='';
   secondNum='';
   operator='';
  
   
}

 

