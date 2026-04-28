import {test,expect} from '@playwright/test'

test('inner frames',async({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/')

const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
await frame3.locator("//input[@name='mytext3']").fill('hello')

const childFrames=await frame3.childFrames()
await childFrames[0].locator("//*[@id='i6']/div[3]/div").check()
await page.waitForTimeout(5000)

})