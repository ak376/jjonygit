const puppeteer = require("puppeteer");

const main = async()=>{

  const browser = await puppeteer.launch({
    headless:false
  })

  const page = await browser.newPage();

  await page.goto("https://news.daum.net/digital#1");

  const data = await page.evaluate(()=> {
    const news = document.querySelectorAll(".list_newsmajor>li .link-txt");

    return Array.from(news).map(li =>li.textContent);
    return news;
  })
  console.log(data);
}

main();