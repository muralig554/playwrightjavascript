import {test,expect} from '@playwright/test'


test('double click',async ({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/#')

const copybutton=await page.locator("//button[normalize-space()='Copy Text']")

await copybutton.dblclick()

const f2=await page.locator('#field2')

await expect(f2).toHaveValue('Hello World!')

await page.waitForTimeout(5000)

}
)