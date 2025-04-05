function calc(){
    let i=0;
    while (i<20){
        i++;
    }
}

console.time("timer");
calc()
let a = 66;
 let b = 34;

 console.log("inko mila k hoga" + (a + b));

let age = Number (prompt (" age bta"));
 console.log(typeof(age));


// swapping with extra variable
 let a = 69
 let b = 96
 let c;

  c = a;
  a = b;
  b = c;

  console.log( a);
  console.log(b)
  
// 2nd method 
  let a = 2
   let b = 1

   a = a+b; // 3
   b = a- b; // 2
   a = a- b;
    console.log(a);
    console.log(b);
// q.1 
let i = 11;
i = i++ + ++i; // 11+13=24
console.log(i)//24
//q,2
 let b = true; // 1, 2
 b++ ;// 1 => 2
 console.log(b); //2

 let a = 11
 a++ 
 console.log(a); // 11

 let i =11;
 let j = --(i++); //  -- 12 , 11
console.log(i)

console.log(Math.round(10.4));// round of the value
console.log(Math.ceil(10.2));// return decimal to higher value like 10.2 = 11
console.log(Math.floor(10.9))// return decimal to lower value like 10.6 = 10
console.log(Math.trunc(17.98)) // remove the decimal part
console.log(Math.pow(2, 5)) //2* 5
console.log(Math.sqrt(25)) // gives square root ie 5 
console.log(Math.abs(-4)) //Convert negative to positive
console.log(Math.max(5, 6, 44)) // gives max value from list 
console.log(Math.min( 3 ,4 , 3 , 2)) // gives min val
console.log(Math.trunc(Math.random()*9000)+ 1000)// gives 4 digit otp

let a =  34.75834584678346;
console.log(a.toFixed(5))

let a = 6 
let b = 7 
 let c = a*b
console.log(c) // 42

let p = 2* (a +b)
console.log(p)// 26

// generate otp

 console.log(Math.trunc(Math.random()*900)+100 )

 // triangle herons formula
 let x = 4
 let y = 5
 let z = 3

 let s = (x+y+z)/2 
 console.log(s)
console.log(Math.sqrt(s*(s-x) * (s-y) * (s-z)))

 //valid voterr   
let age = prompt("umr btaao??")

if(isNaN(age)){
    console.log("bkchodi mt kree")
}
else if (age< 18){
    console.log("chll niklll")
} 
 else {
    console.log("chll vote dee")
}
// electricity bill
let unit = Number( prompt('enter electricity unit'))
let amount = 0;
if(unit > 400 ){
    amount = (unit - 400)* 13;
    unit = 400
}
if(unit > 200 && unit <= 400){
    amount += (unit - 200)* 8;
    unit = 200
}
if(unit > 100 && unit <= 200){
    amount += (unit - 100)* 6;
    unit = 100
}

amount += unit * 4;
console.log(amount)



 
     
