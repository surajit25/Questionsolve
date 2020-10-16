//write a program to take a string and count the occurence of the each character in the string.

const solution=(string)=>{

    var extract=string.split("");
    var arr=[];
    for(var i=0;i<extract.length;i++){
        var countword=1;
     if(arr.indexOf(extract[i])==-1){
         arr.push(extract[i]);
         var countword=1;
         for(var j=i+1;j<extract.length;j++){
             if(extract[i]==extract[j]){
                    countword++;
             }
         }
         
     }else{
         continue;
     }
    
        console.log(extract[i]+" this is occure "+countword);
    }
    
    }
    
    solution("this is for example");
