document.addEventListener("DOMContentLoaded", ()=>{
    // 6ro버튼 가져오기
//     const bts=document.querySelectorAll("button");
//     console.log(bts);
//     bts.forEach((item)=>{//foreach()는  break불가
//     item.addEventListener('click',()=>{
//         // dice2(item.textContent);
//         dice2(parseInt(item.textContent));
//     });
// });
// 확인버튼가져오기
const bt=document.querySelector("button");
const radios=document.querySelectorAll("input[type=radio]");
bt.addEventListener("click", ()=>{
    for (let item of radios){
        if(item.checked){
            console.log(item.value);
            dice2(parseInt(item.value));
            break;
        }
            

    }
});
});

// 각버튼에 이벤트 달기


const dice = () => {
    const adiv = document.querySelector("#adiv") ;
    let n = Math.floor(Math.random() * 6) + 1;
    console.log(n) ;

    // if (n === 1) adiv.innerHTML = "<img src='./img/1.png'>" ;
    // else if (n === 2) adiv.innerHTML = "<img src='./img/2.png'>" ;
    // else if (n === 3) adiv.innerHTML = "<img src='./img/3.png'>" ;
    // else if (n === 4) adiv.innerHTML = "<img src='./img/4.png'>" ;
    // else if (n === 5) adiv.innerHTML = "<img src='./img/5.png'>" ;
    // else if (n === 6) adiv.innerHTML = "<img src='./img/6.png'>" ;

    adiv.innerHTML = `<img src='./img/${n}.png'>` ;
}
const dice2=(seln)=>{
    let n =Math.floor(Math.random()*6)+1;

    // 주사위 이미지 넣을 위치
    // const adiv=document.getElementById("adiv");
    const adiv =document.querySelector("#adiv");
    adiv.innerHTML=`<img src='./img/${n}.png'>`;

    // 결과 출력을 위한 위치
    const h2=document.querySelector("hgroup > h2");
    
    if(n==seln) {h2.textContent="맞음(승)";h2.style.color="gray";}
    else { h2.textContent="틀림(패)";h2.style.color="red";}
}
