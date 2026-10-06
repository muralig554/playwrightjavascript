import {test,expect} from '@playwright/test'

test('login',async({page})=>{

await page.goto('https://www.demoblaze.com/')
await page.click('id=login2')
await page.fill('#loginusername','gmr554')
await page.fill('#loginpassword','test@123')
await page.click("//button[normalize-space()='Log in']")

})
