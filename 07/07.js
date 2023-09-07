//  전역변수
// 하트와 폭탄의 위치를 결정하는 배열
// 하트:0 폭탄:1
let arr=[0,0,0,0,0,0,0,0,1]
let flag=true//폭탄 섞기 확인용 플래그
let cnt=0
 const init=(boxs)=>{//초기화
    flag=true
    cnt=0
    boxs.forEach(element => {
        let n=element.getAttribute("id").slice(-1)
        console.log(n)
        element.textContent=n;
    });
}

document.addEventListener("DOMContentLoaded",()=>{
    const boxs= document.querySelectorAll(".gri > div")//박스 초기화
    const bt=document.querySelector("button")
    const h2=document.querySelector('h2')
    init(boxs)//초기화
    // 폭탄섞기 버튼처리
    
    bt.addEventListener('click',()=>{
        // flag 변수확인
        if(flag){
            // 배열 suffle
            arr.sort(()=>Math.random()-0.5);
            console.log(arr)
            init(boxs)
            h2.textContent='폭탄을 피해 선택해주세요'
            h2.style.color='red'
            flag=false
        }
    })
    boxs.forEach(element=>element.addEventListener('click',()=>{
        // flag 변수확인
        if(flag){
            // 
            

            h2.textContent='폭탄을 섞어주세요'
            h2.style.color='blue'
            return
        }
        let idx=parseInt(element.textContent)
        if(isNaN(idx)) return///이미지 있는경우 처리안함
        if(arr[idx-1]===0){
            //하트
            element.innerHTML='<img src="./img/hart.png">'
            cnt++
            if(cnt===8){
                    h2.textContent='성공'
                    h2.style.color='green'

                    flag=true
                    idx=arr.indexOf(1)
                    console.log(idx)

                    document.getElementById("box"+(idx+1)).innerHTML='<img src="./img/hart.png">'
            }
        }
        else{
            // 폭탄
            element.innerHTML='<img src="./img/boom.png" width="90%">'
            h2.textContent='실패'
            h2.style.color='blue'
            flag=true
        }

        console.log(element.textContent)
    }))
})
