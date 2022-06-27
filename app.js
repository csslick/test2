// app.js

/* 
  1.이미지 썹네일 클릭 
    -> light box에 해당 이미지 url 변경 
    -> 팝업 display
  2.닫기 버튼 클릭 
    -> popup창 닫기
*/

const img = document.querySelectorAll('#gallery li');
// 각 썹네일 이미지 요소에 이벤트 등록
for(let i = 0; i < img.length; i++) {

  img[i].addEventListener('click', function(){
    // 이미지 탐색 후 URL값 가져오기
    let imgUrl = img[i].children[0].getAttribute('src');
    console.log(imgUrl, i);

    showImg(i);
  });

} // for


// 이미지 출력 함수: showImg(이미지 번호)
function showImg(num) {

  const imgLi = document.querySelectorAll('#gallery > li');
  const Imglength = imgLi.length;
  const imgUrl = []; // 이미지 URL

  // 문서 내의 이미지 URL을 배열에 저장
  for(let i = 0; i < Imglength; i++) {
    imgUrl.push(imgLi[i].children[0].getAttribute('src'));
  }

  // 라이트 박스 표시
  const lightbox = document.getElementById('lightbox');
  // lightbox.setAttribute('class', 'on');
  lightbox.classList.add('on');
  // 클릭한 이미지 표시
  const lightboxImg = document.querySelector('#lightbox .box img');
  lightboxImg.setAttribute('src', imgUrl[num]);

}

/* 팝업창 닫기
  닫기 버튼 누르면 닫힘
*/
const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', function(){
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('on');
});
