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
