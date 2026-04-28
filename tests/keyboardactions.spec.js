import {test,expect} from '@playwright/test'

test('keyboardactions',async({page})=>
{

await page.goto('https://text-compare.com/')

await page.fill('#inputText1','Welcome to UK')

//ctrl+A

await page.keyboard.press('Control+A')

//ctrl+C
await page.keyboard.press('Control+C')

//Tab
await page.keyboard.down('Tab')
await page.keyboard.up('Tab')

//Ctrl+V

await page.keyboard.press('Control+V')

await page.waitForTimeout(10000)





})