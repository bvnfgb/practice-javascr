const showdata=(cd,apikey)=>{
    console.log(cd)
    url1=`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${cd}`
    
    const divDetail=document.querySelector(".detail")
    fetch(url1)
    .then((resp)=>resp.json())
    .then((data=>{
        
            let dataTag=""
            dataTag=dataTag+`<span class='title'>코드</span>`
            dataTag=dataTag+`<span class='con'>${data.movieInfoResult.movieInfo.movieCd}</span>`
            dataTag=dataTag+`<span class='title'>영화명(국문)</span>`
            dataTag=dataTag+`<span class='con'>${data.movieInfoResult.movieInfo.movieNm}</span>`
            dataTag=dataTag+`<span class='title'>영화명(원문)</span>`
            dataTag=dataTag+`<span class='con'>${data.movieInfoResult.movieInfo.movieNmOg}</span>`
            dataTag=dataTag+`<span class='title'>상영시간</span>`
            dataTag=dataTag+`<span class='con'>${data.movieInfoResult.movieInfo.showTm}</span>`
            dataTag=dataTag+`<span class='title'>제작연도</span>`
            dataTag=dataTag+`<span class='con'>${data.movieInfoResult.movieInfo.prdtYear}</span>`
            dataTag=dataTag+`<span class='title'>개봉연도</span>`
            dataTag=dataTag+`<span class='con'>${data.movieInfoResult.movieInfo.openDt}</span>`
            dataTag=dataTag+`<span class='title'>영화유형명</span>`
            dataTag=dataTag+`<span class='con'>${data.movieInfoResult.movieInfo.typeNm}</span>`
            dataTag=dataTag+`<span class='title'>제작상태명</span>`
            dataTag=dataTag+`<span class='con'>${data.movieInfoResult.movieInfo.prdtStatNm}</span>`
            divDetail.innerHTML=dataTag
    }))
    .catch(err=>console.log(err))
}
const getData=(dt,divcon,sel1)=>{
    // 데이터 가져오기
    let apikey="f5eef3421c602c6cb7ea224104795888"
let tDt=dt.value.replaceAll("-","")
    let url="https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
    url=url+`?key=${apikey}`
    url=url+`&targetDt=${tDt}`
    if(sel1.value !=='T'){
        url=url+`&multiMovieYn=${sel1.value}`
    }
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>{
        let dailyBoxOfficeList=data.boxOfficeResult.dailyBoxOfficeList
        let conTag="<table>"
        conTag=conTag+`<thead>
        <tr>
          <th scope="col">순위</th>
          <th scope="col">영화명</th>
          <th scope="col">개봉일</th>
          <th scope="col">매출액</th>
          <th scope="col">누적매출액</th>
          <th scope="col">관객수</th>
          <th scope="col">누적관객수</th>
        </tr>
      </thead>`
      conTag=conTag+'<tbody>'
        for(let item of dailyBoxOfficeList){
            

            conTag=conTag+'<tr>'
            conTag=conTag+`<td class="ae"><div class="ad"><a onclick=showdata(${item.movieCd})>${item.movieNm}</a></div>`
            if(item.rankInten==0){
                conTag=conTag+`<div class="ac1">⏺`
            }
            else if(item.rankInten>0)
                conTag=conTag+`<div class="ac2">⬆`
            else
                conTag=conTag+`<div class="ac3">⬇`
            
            conTag=conTag+`${Math.abs(item.rankInten)}`
            conTag=conTag+`</div></td>`
            conTag=conTag+`<td>${item.rank}</td>`
            conTag=conTag+`<td>${item.openDt}</td>`
            conTag=conTag+`<td><span class="numtd">${parseInt(item.salesAmt).toLocaleString ('ko-KR')}</span></td>`
            conTag=conTag+`<td><span class="numtd">${parseInt(item.salesAcc).toLocaleString ('ko-KR')}</span></td>`
            conTag=conTag+`<td><span class="numtd">${parseInt(item.audiCnt).toLocaleString ('ko-KR')}</span></td>`
            conTag=conTag+`<td><span class="numtd">${parseInt(item.audiAcc).toLocaleString ('ko-KR')}</span></td>`
            
            
            
            // conTag=conTag+`<li>${item.movieNm}</li>`
        }
        conTag=conTag+"</tbody></table>"
        divcon.innerHTML=conTag
        console.log(dailyBoxOfficeList)
        // console.log(data.boxOfficeResult['boxofficeType'])
    })
    .catch((err)=>console.log(err))
}
document.addEventListener("DOMContentLoaded",()=>{
    const dt=document.querySelector("#dt1")
    dt.addEventListener("change",()=>{
        console.log(dt.value)



const divcon=document.querySelector("#divCon")

    const sel1=document.querySelector("#sel1")
    dt.addEventListener("change", ()=>{
            getData(dt, divcon,sel1)
        })

   sel1.addEventListener("click",()=>{
    console.log(dt.value)
    if(dt.value) getData(dt, divcon,sel1)
   })
    
        

       

    })
    
}
    
)

