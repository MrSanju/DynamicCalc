


var inpVal = document.getElementById("inp-box");






var str = "";

const getVal = (x) => {
    str += x;
    inpVal.value = str;
 
}


const getEql = () => {
    str = eval(str);
    inpVal.value=str;
    
}


const getClr = () => {
    str = "";
    inpVal.value = str;
}

const getback = () => {
    str = str.slice(0,str.length-1);
    inpVal.value = str;
}