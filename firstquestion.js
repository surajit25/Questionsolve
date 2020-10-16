const solution=(strin,index)=>{
   
    var value=strin[index];
    var str=strin.slice(0,index)+strin.slice(index+1);

     return str;

}

console.log(solution("this is surajit",0));