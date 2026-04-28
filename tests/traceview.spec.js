import {test,expect} from '@playwright/test'

test('traceview',async({page})=>{ 

await page.goto('https://www.demoblaze.com/')

await page.click('id=login2')
 await page.fill('#loginusername','gmr554')
 await page.fill('#loginpassword','test@123')
 await page.click("//button[normalize-space()='Log in']")

//const logoutlink=await page.locator("//a[@id='logout2']")

await expect(page.locator('#logout')).toBeVisible()

//await expect(logoutlink).toBeVisible();

 //await expect (page).toBeVisible('logout')
//await page.close();
await page.waitForTimeout(3000)

})