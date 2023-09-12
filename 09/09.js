let juso;   //전체주소
let si;     //시
let gu;     //구
let dong;   //동
let equptype={
    "노인시설":"001",
    "복지회관":"002",
    "마을회관":"003", 
    "보건소":"004",
    "주민센터":"005",
    "면동사모소":"006",
    "종교시설":"007",
    "금융기관":"008", 
    "정자":"009", 
    "공원":"010", 
    "정자 파고라":"011",
    "공원":"012", 
    "교량하부":"013", 
    "나무그늘":"014", 
    "하천둔치":"015", 
    "기타":"099"
}

//select 박스 채우기
// d: data, s:selectbox
const addOption=(d,s)=>{
    for(let [k,v] of Object.entries(d)){
        console.log(k,v)
        const option=document.createElement("option")
        option.value=v
        option.text=k
        s.appendChild(option)
    }
}
//주소정보가져오기
const getJuso=async(sel1)=>{
    const resp=await fetch("juso2023.json")
    const data= await resp.json()
    juso=data
    //juso=await resp.json()
    si={}
    juso.forEach(element => {
        
        let{시도명칭, 시도코드}=element
        if(!si[시도명칭]){
            si[시도명칭]=시도코드
        }
        
    });
    addOption(si,sel1)
    console.log(si)
    
}
const removeOption=(s, firstS)=>{
    
    
    while(s.hasChildNodes()){
        
        s.removeChild(s.firstChild)
        
    }
    const option=document.createElement("option")
    option.value=""
    option.text=firstS
    s.appendChild(option)
    
        
}
const getData=async(cd,etype,h2)=>{
    let url= 'https://apis.data.go.kr/1741000/HeatWaveShelter2/getHeatWaveShelterList2';
    url=url+"?serviceKey=QC3IqYk7CfC8vM6GqkDj1gYFbZdJbl1vNV8ly8VR7G558o8KIvXJ0vQAzh4G4RtJIxWgcafouF%2BJIejePzKthw%3D%3D"
    url=url+"&pageNo=1"
    url=url+"&numOfRows=10"
    url=url+"&type=json"
    url=url+"&year=2023"
    url=url+`&areaCd=${cd}`
    url=url+`&equptype=${etype}`
    console.log(url)
    const resp=await fetch(url)
    const data=await resp.json()
    console.log(data)
    const a=document.querySelector("#viewTB")
    

    let conTag="<table>"
    conTag=conTag+`<thead>
    <tr>
        <th scope="col">쉼터명</th>
        <th scope="col">주소</th>
        <th scope="col">인원수</th>
        <th scope="col">선풍기</th>
        <th scope="col">에어컨</th>
    </tr>
    </thead>`
    conTag+='<tbody>'
    if (data["RESULT"] !== undefined) {
        h2.innerHTML = `<span class='h2Sel1'>${data["RESULT"]["resultMsg"]}</span>` ;
        a.innerHTML = "" ;
        return ;
    } 
    let row=data["HeatWaveShelter"][1].row;
    for(let item of row){
        conTag+='<tr>'
        conTag+=`<td>${item.restname}</td>`
        conTag+=`<td>${item.restaddr}</td>`
        conTag+=`<td>${item.usePsblNmpr}</td>`
        conTag+=`<td>${item.colrHoldElefn}</td>`
        conTag+=`<td>${item.colrHoldArcndtn}</td>`
        conTag+='</tr>'
    }
    conTag+='</tbody></table>'
    
    a.innerHTML=conTag
    console.log(data["RESULT"])
    
    h2.innerHTML=h2.innerHTML+`,<span class='h2Sel1'> totalCount ${data["HeatWaveShelter"]['0']["head"]['0']["totalCount"]}</span>`
    
    // console.log(row)
}
document.addEventListener("DOMContentLoaded",()=>{
    
    const sel1= document.querySelector("#sel1")
    const sel2= document.querySelector("#sel2")
    const sel3= document.querySelector("#sel3")
    const sel4= document.querySelector("#sel4")
    const bt= document.querySelector("#bt")
    const h2=document.querySelector("h2")
    const option=document.createElement("option")
    addOption(equptype,sel4)
    getJuso(sel1)
    sel1.addEventListener("change",async ()=>{
        
    gu={}
    
    removeOption(sel2,"--구선택--")
    removeOption(sel3,"--동선택--")
    juso.filter(element=>element["시도코드"]===sel1.value)
    .map(element => {
        
        let{시군구명칭, 시군구코드}=element
        if(!gu[시군구명칭]){
            gu[시군구명칭]=시군구코드
        }
        
    });
    
    addOption(gu,sel2) 
    
    })
    sel2.addEventListener("change",async ()=>{
        
        dong={}
        
        removeOption(sel3,"--동선택--")
        
        juso.filter(element=>element["시도코드"]===sel1.value
        && element["시군구코드"]===sel2.value)
        .map(element => {
            
            let{읍면동명칭, 읍면동코드}=element
            if(!dong[읍면동명칭]){
                dong[읍면동명칭]=읍면동코드
            }
            
        });
        
        addOption(dong,sel3) 
        
        })
        //확인버튼
    bt.addEventListener("click", (e)=>{
        e.preventDefault
        
        if(sel1.value==""){
            h2.innerHTML=`<span class='h2Sel1'>시를 선택해 주세요.</span>`
            return
        }
        if(sel2.value==""){
            h2.innerHTML=`<span class='h2Sel1'>구를 선택해 주세요.</span>`
            return
        }
        if(sel3.value==""){
            h2.innerHTML=`<span class='h2Sel1'>동을 선택해 주세요.</span>`
            return
        }
        if(sel4.value==""){
            h2.innerHTML=`<span class='h2Sel1'>시설유형을 선택해 주세요.</span>`
            return
        }
        //지역코드
        let areaCd=`${sel1.value}${sel2.value}${sel3.value}00`
        h2.innerHTML=`<span class='h2Sel2'>지역코드 ${areaCd} 시설유형 ${sel4.value} </span>`

getData(areaCd,sel4.value, h2)
    })

    
})