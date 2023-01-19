const toggebut = document.querySelector(".toggle-button");

const bodyBack = document.querySelector("body");

const headerNav = document.querySelector(".header-nav-list-wrapper");

const bookmarkwrap = document.querySelector(".bookmark-wrapper");
const serachInput = document.querySelector("#search-input");
const imgIconWrappers = document.querySelectorAll(".img-icon.wrapper");

const bookmarkTexts = document.querySelectorAll(".bookmark-text");

toggebut.addEventListener("click", function () {
  toggebut.textContent = "다크모드";

  toggebut.classList.toggle("toggle-button-darkmode");
  bodyBack.classList.toggle("body-background-darkmode");

  headerNav.classList.toggle("text-darkmode");

  for(let i = 0 ; i <imgIconWrappers.length; i++){
    imgIconWrappers[i].classList.toggle("img-icon-wrapper-darkmode");
  }

  for(let i = 0 ; i <bookmarkTexts.length; i++){
    bookmarkTexts[i].classList.toggle("text-darkmode");
  }

  if (toggebut.classList.contains("toggle-button-darkmode")) {
    toggebut.textContent = "일반모드";
  }
})



serachInput.addEventListener('keyup', function (e){
  if(e.code ==="Enter"){
    if(!e.target.value){
      alert("검색어를 입력하지 않으셨습니다!");
      return;
    }
    // 이동하기
    const gogosearch= "https://www.google.com/search?q=";
    location.href = gogosearch+e.target.value;

    // 새창으로열기
    window.open(gogosearch+e.target.value,"_blank");
  }
});