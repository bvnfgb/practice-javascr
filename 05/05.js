const toggle=(v1,v2,v3,v4)=>{
    txt1.value="";
    txt2.value="";
    sel1.value=v1;
    sel2.value=v2;
    div1.textContent=v3;
    div2.textContent=v4;
}
const cToF=(c)=>{
    return c* 9/5 + 32
}
const fToC=(c)=>{
    return (c- 32) * 5/9
}
document.addEventListener("DOMContentLoaded", ()=>{
    
    const sel1=document.querySelector("#sel1");
    const sel2=document.querySelector("#sel2");

    const div1=document.querySelector("#div1");
    const div2=document.querySelector("#div2");
    
    const txt1=document.querySelector("#txt1");
    const txt2=document.querySelector("#txt2");
    txt1.addEventListener("input",()=>{
        if(sel1.value==="C")
            txt2.value=cToF(parseFloat(txt1.value));
        else
            txt2.value=fToC(parseFloat(txt1.value));
    });

    // select box1 제어
    sel1.addEventListener("change",()=>{
        if(sel1.value==="C"){
            toggle("C","F","℃","℉");
        }
        else{
            toggle("F","C","℉","℃");
        }
    });
    sel2.addEventListener("change",()=>{
        if(sel2.value==="C"){
            toggle("F","C","℉","℃");
        }
        else{
            toggle("C","F","℃","℉");
        }
    });
});

