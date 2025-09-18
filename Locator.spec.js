const{chromium,test} =require('@playwright/test');

test('Locator',async()=>{
  const browser = await chromium.launch({headless : false});
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.facebook.com/r.php?entry_point=login',{waitUntil : 'domcontentloaded'});

  const date = await page.locator('#day');
  await date.selectOption({index : 20}); // value , text,index 

  const months = await page.$$('#month option'); 
  const monthlength = await months.length;
  console.log(monthlength);

  for(let i =0;i<months.length;i++){
    const eachmonth = await months[i].textContent();
    console.log(eachmonth);
  }

  for(let each of months){
    const text = await each.textContent()
      if(text === 'August'){
        const month = await page.locator('#month');
         await month.selectOption(text);
         break;
      }
  }

  // const month = await page.locator('#month');
  // await month.selectOption('Aug');

  const year = await page.locator('#year');
  await year.selectOption({value : '2016'});

  await page.waitForTimeout(2000);


  
});
