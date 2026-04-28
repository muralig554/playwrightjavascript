import {test,expect} from '@playwright/test'

test('draganddrop',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/#')

const darg=await page.locator('#draggable')
const drop=await page.locator('#droppable')

await darg.dragTo(drop)

await page.waitForTimeout(5000)

})