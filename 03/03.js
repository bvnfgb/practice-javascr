document.addEventListener("DOMContentLoaded", ()=>{
    const bt1=document.querySelector("footer > div");

    console.log(bt1);

    const bt=document.querySelectorAll("footer button");
    console.log(bt)

    console.log(x);
    var x=10;//기존 변수
    console.log(x);

    //최신 변수
    // console.log(x1);
    let x1=10;
    console.log(x1);

    //nodelist 순회. 
    //1. for
    for(let i=0;i<bt.length;i++){
        console.log(bt[i]);
    }
    //2. for in 키순회
    for(let i in bt){
        console.log(i, bt[i]);
    }
    //3. arr 순회
    console.log("3.for each arr순회");
    bt.forEach((i)=>console.log(i));
    bt.forEach((i,idx)=>console.log(i,idx));

    // 4. for of순회
    console.log("4. for of순회");

    for(let i of bt){
        console.log(i);
    }
    for(let [idx, i] of bt.entries()){
        console.log(idx, i);
    }

    console.log("버튼의 캡션값 가져오기");
    let s="<ul>";

    for(let i of bt){
        s=s+"<li>"+i.getAttribute("id")+'='+i.textContent+"</li>";
    }
    console.log(s);
    document.querySelector("#adiv").innerHTML=s+"</ul>";
})