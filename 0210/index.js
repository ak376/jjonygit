async function setRenderBackground(){
  const result = await axios.get("https://picsum.photos/1280/720",{
    responseType:"blob"
  });
  console.log(result.data);
  //URL.createObjectURL -> 임시 URL을 만든다(페이지 내에서만 유효)
  //받아온 데이터를 임시 URL을 ㅁㄴ들어서 그 URL에 넣는다
  const imageURL = URL.createObjectURL(result.data);
  document.querySelector('body').style.backgroundImage =`url(${imageURL})`;
}

// const setRenderBackground = async () => {}

function getMemo(){
  //localStorage에서 가져와서 데이터 넣어주기
  const memo = document.querySelector('.memo');
  memo.textContent = localStorage.getItem('todo');

}

function setMemo(){
  const memoInput = document.querySelector('.memo-input');
  memoInput.addEventListener('keyup',function(e){
    // console.log(e.code);
    // console.log(e.target);
    console.log(e.target.value);
    if(e.code == 'Enter' && e.target.value){
      const memo = document.querySelector('.memo');
      memo.textContent=e.target.value;

      //메모가 날라가지 않게 저장하기 local storage
      //localStorage.setItem('키', '넣을값')
      localStorage.setItem('todo',e.target.value);
      //localStorage.getItem('키')=>가져온다
      e.target.value="";

    };
  })
}
function deleteMemo(){

  document.addEventListener('click', function(e){
    console.log(e.target);
    //localStorage 삭제 후localStorage
    if(e.target.classList.contains('memo')){
      localStorage.removeItem('todo');
      e.target.textContent="";
    }})
  }

function allRender(){
  setRenderBackground();
  setTime();
  setMemo();
  getMemo();
  deleteMemo();

  setInterval(()=>{
    setRenderBackground();
  },5000)
}


function setTime(){
  const timer = document.querySelector('.timer');

  setInterval(()=>{
    //date 함수
    const date = new Date();
    console.log(date);
    //getHours(date)사용
    timer.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  },1000)
}
allRender();