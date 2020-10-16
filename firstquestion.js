// write a js program to take a string and remove as desired by user.

const solution=(string,char)=>{

    var index=string.indexOf(char);
    var newstring=string.slice(0,index)+string.slice(index+1);

    console.log(newstring);
}

var charvalue=prompt();

solution("this is for surajit",charvalue);
