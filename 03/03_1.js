const domCreate=()=>{
    console.log("dom 생성");
    const myh2= document.createElement("h2");
    const myh2Txt=document.createTextNode("자바스크립트 생성")

    myh2.appendChild(myh2Txt);
    document.getElementById("adiv").append(myh2);
}
const domRead=()=>{
    const myh1=document.querySelector("h1")
    console.log("innerHTML=>",myh1.innerHTML);
    console.log("innerText=>",document.querySelector("h1").innerText);
    console.log("textContent=>",document.querySelector("h1").textContent);
}

const domUpdate=()=>{
    const myh2=document.querySelector("h")
    if(myh2){
        myh2.innerHTML="<h3>자바스크립트 수정</h3>"
    }
        
    // myh1.textContent="<h3>자바스크립트 수정</h3>"
}

const domDelete=()=>{
    const myh2=document.querySelector("h2");
    console.log("myh2", myh2);
    if(myh2){
        myh2.remove();
    }
    
}