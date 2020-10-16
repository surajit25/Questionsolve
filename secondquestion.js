const solution=(array)=>{
    var countpositive=0;
    var countnegative=0;
    var countzero=0;
    for(var element of array){
        if(element>0){
            countpositive++;
        }else if(element<0){
            countnegative++;
        }else{
            countzero++;
        }
    }


    var obj={
        countPos:countpositive,
        countNeg:countnegative,
        countZer:countzero
    }


    return obj;

}

 console.log(solution([1,0,-3,4,0,-5,8]));