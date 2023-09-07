// 회문처리
const palindrome=(x)=>{
    // 문자열 처리
    console.log("문자열 길이"+x.length)
    // 문자열없는 경우
    if (x.length ===0) return;
// 문자열 한글자식
for(let c of x)
console.log(c);
// 회문확인
// const txt2=document.querySelector("#txt2");
// s="";
// for(let i=x.length-1;i>=0;i--) s=s+x[i]
s=x.split("").reverse().join("")

if(x===s) txt2.value="회문O"
else txt2.value="회문X"
}
// 숫자처리:합계
const numSum=(x)=>{
    
    a=0;
    
    for(let c of x){
        
        if(!isNaN(c))
        a+=parseInt(c)
    }
    
    txt2.value=a
    
}
document.addEventListener("DOMContentLoaded",()=>{
    // 버튼
    const bts=document.querySelectorAll("input[type=button]");
    const txt1=document.querySelector("#txt1");
    const rbts=document.querySelector("input[type=reset]").addEventListener('click',()=>
    // 배열내용 지우기
    arr.length=0
    )
    console.log(bts);
    bts.forEach((item)=>{
        item.addEventListener("click",()=>{
            if(item.value==="회문확인") palindrome(txt1.value);
            else numSum(txt1.value);
        })
    })
    // 배열확인
    let arr=[];

    const bt1s=document.querySelectorAll(".bt1")
    bt1s.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log(item.textContent)
            switch(item.textContent){
                case '사과':arr.push('🍎'); break;
                case '바나나':arr.push('🍌');break;
                case '당근':arr.push('🥕');break;
                case '수박':arr.push('🍉');break;
            }
            console.log(arr)
            txt1.value=arr.join(',')
        })
    })
    

    const bt2s=document.querySelectorAll(".bt2")
    bt2s.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log(item.textContent)
            switch(item.textContent){
                case '사과삭제':
                    arr=arr.filter((item)=>item!='🍎'); 
                    break;
                case '바나나삭제':
                    arr=arr.filter((item)=>item!='🍌');
                    break;
                case '당근삭제':
                    arr=arr.filter((item)=>item!='🥕');
                    break;
                case '수박삭제':
                    arr=arr.filter((item)=>item!='🍉');
                    break;
            }
            console.log(arr)
            txt1.value=arr.join(',')
            
        })
    })
    const bt3s=document.querySelectorAll(".bt3")
    bt3s.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log(item.textContent.slice(0,2))
            switch(item.textContent.slice(0,2)){
                case '사과':
                    arr=arr.map((item)=>item==='🍎' ? '🥒':item); 
                    break;
                case '바나':
                    arr=arr.map((item)=>item==='🍌' ? '🥦':item);
                    break;
                case '당근':
                    arr=arr.map((item)=>item==='🥕' ? '🍊':item);
                    break;
                case '수박':
                    arr=arr.map((item)=>item==='🍉' ? '🍇':item);
                    break;
            }
            console.log(arr)
            txt1.value=arr.join(',')
            
        })
    })
})