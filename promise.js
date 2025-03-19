var ans = new Promise ((res , rej)=>{
    if (false ){
        return res ();
    }
    else{
        return rej ();
    }
})
ans
.then(function (){
    console.log("ressolve")
    
    
    
    
})
.catch(function(){
    console.log("rejjj")
})


//lucky drawww
var draw = new Promise ((res, rej )=>{
     var n = Math.floor ( Math.random () * 10);
     
     if (n<5 ){
         return res ();
     }else 
     return rej();
})
draw. then (function (){
    console.log("7 croreeee")
})
.catch(function (){
    console.log("loddaaaa")
})
