import {test,expect} from '@playwright/test'
import path from 'node:path'

test.skip('screenshot',async({page})=>

    {

await page.goto('https://www.demoblaze.com/index.html')

await page.screenshot({path: 'tests/Screenshot/'+Date.now()+'homepage.png'})

    })

    test.only('fullpage screenshot',async({page})=>

    {

await page.goto('https://www.demoblaze.com/index.html')

//await page.screenshot({path: 'tests/Screenshot/'+Date.now()+'fullpage.png',fullPage:true})
 // await page.screenshot({path: 'tests/Screenshot/demoblaze-fullpage.png',fullPage: true})
  
await page.screenshot({path: 'tests/Screenshot/demoblaze-fullpage-' + Date.now() + '.png',fullPage: true})

    })

    //body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[1]/div[1]

      test('element screenshot',async({page})=>

    {

await page.goto('https://www.demoblaze.com/index.html')

await page.locator('//*[@id="tbodyid"]/div[1]/div').screenshot({path: 'tests/Screenshot/'+Date.now()+'element.png'})

    })