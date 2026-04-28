import {test,expect} from '@playwright/test'

test('auto sug',async ({page}) =>{

await page.goto('https://www.redbus.in/')



await page.locator('#srcinput').fill('Delhi')


await page.waitForTimeout(5000)
//await page.waitForSelector("//ul[contains(@class,'autoFill')]//li");
await page.click("//ul[contains(@class,'autoFill')]//li[contains(., 'Mayur Vihar')]")


})