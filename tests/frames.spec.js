import {test,expect} from '@playwright/test'

test('frames',async({page})=>

    {
await page.goto('https://ui.vision/demo/webtest/frames/')

//using url or name
  /*const allframes= await page.frames()
  console.log("number of frames in screen is",allframes.length)

 const frame1= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
 await frame1.fill("//input[@name='mytext1']",'hello')*/

//using loctor

const locator=page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']")
await locator.fill('Hello')

  await page.waitForTimeout(5000)

    })