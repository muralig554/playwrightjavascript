import {test,expect} from '@playwright/test'

test('mousehovser',async({page})=>

    {
await page.goto('https://testautomationpractice.blogspot.com/')

const first=await page.locator("//button[normalize-space()='Point Me']")
const second=await page.locator("//a[normalize-space()='Laptops']")

await first.hover()
await second.hover()
await page.waitForTimeout(5000)

    }

)