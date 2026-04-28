import {test,expect,chromium} from '@playwright/test'

test('windowhandle',async()=>{

const browser=await chromium.launch()
const context=await browser.newContext()

const page1=await context.newPage()

await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page1).toHaveTitle('OrangeHRM')

const pagepromise=context.waitForEvent('page')

await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();

const newpage= await pagepromise

await expect(newpage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM')

await page1.waitForTimeout(5000)
await newpage.waitForTimeout(5000)
await browser.close()
})