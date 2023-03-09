const puppeteer= require("puppeteer");

const main = async() => {
  //브라우저 만들기
  const browser = await puppeteer.launch({
    headless:false  })

  //브라우저에 페이지 만들기
  const page = await browser.newPage();
  //페이지에서 주소로 이동하기
  await page.goto("https://www.naver.com");

  //대기하는법
  //waitForSelector -> 특징 selector가 올 때까지 대기하는 역할
  //이미지가 로딩시에 없었으니 이미지가 나올때까지 기다리는 역할
  await page.waitForSelector("#content .item img");
  
  //document.querySelectorAll("#content .item");

  // node.js  는 브라우저가 아닌 환경이기에 document 불가능
  // headless -> false
  const data = await page.evaluate(() =>{
    const webtoon = document.querySelectorAll("#content .item img");

    const result = Array.from(webToonlist).map(li=>li.getAttribute('alt'));
    return result;

    //querySelectorAll 유사배열 -> 배열화를 시킨후에 배열 메서드가 사용가능
  })
  console.log(data);


  //await page.screenshot({path:"screenshot.jpg", fullPage:true});

  //await page.pdf({path:"test.pdf", format:'A4'});
}

main();