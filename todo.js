<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="t.css">
    
   <div class="container">
<h1>  MY TO DO LIST APP :)</h1>

<div class="inputs">
    <input type="text" placeholder="Enter something.." id="inp">
    
<button onclick="Add()"> Add</button>
</div>
   </div>
<div class="text">

</div>

</head>

<body>
   <script src="t.js"></script> 
</body>
</html>

body{
    background-color: rgb(49, 19, 49);
    color: aliceblue;
}
.container{
   width: 360px;
   padding: 33px;
   background-color: white;
   color: rgb(73, 48, 71);

   
border: 4px solid rgb(196, 138, 169);
  border-radius: 7px;
  
 
  
}
input{
    width: 250px;
    padding: 8px;
    border: 3px solid pink;
  
}
button{
    width: 60px;
    height: 40px;
    background-color: rgb(237, 181, 218);
    border-radius: 3px;
    outline: none;
 
    
}
img{
    height: 800px;
    width: 500px;
    margin-left: 900px;
    margin-top: 7px;
}

let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
   if( inputs.value == ""){
    alert ("enter some task")
   }else{
    let newEl = document.createElement("ul");
    newEl.innerHTML = `${inputs.value}`;
    text.appendChild(newEl)
   }
}
let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
   if( inputs.value == ""){
    alert ("enter some task")
   }else{
    let newEl = document.createElement("ol");
    newEl.innerHTML = `${inputs.value}<i class="fa fa-trash" style="color: red;"></i>
 `;
    text.appendChild(newEl);
    inputs.value =  "";
    newEl.querySelector("i").addEventListener("click" , remove);
    function remove (){
      newEl.remove();
    }
   }
}

body{
    background-color: rgb(49, 19, 49);
    color: aliceblue;
}
.container{
   width: 360px;
   padding: 33px;
   background-color: white;
   color: rgb(73, 48, 71);
   margin-left: 33%;
   margin-top: 5px;

   
border: 4px solid rgb(196, 138, 169);
  border-radius: 7px;
  
 
  
}
input{
    width: 250px;
    padding: 8px;
    border: 3px solid pink;
  
}
button{
    width: 60px;
    height: 40px;
    background-color: rgb(237, 181, 218);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
 
    
}
img{
    height: 800px;
    width: 500px;
    margin-left: 900px;
    margin-top: 7px;
}
.text ol {
    position: relative;
    background-color: rgb(175, 154, 167);
    font-size: 16px;
    text-align: left;
    padding: 7px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}
.text ol i{
    position: absolute;
    right: 10px;
    cursor: pointer;
}
