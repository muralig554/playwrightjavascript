import {test,expect} from  '@playwright/test'

test('Input',async({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(await page.locator('#name')).toBeEnabled();
    await expect(await page.locator('#name')).toBeVisible();
    await expect(await page.locator('#name')).toBeEmpty();
     await expect(await page.locator('#name')).toBeEditable();



    await page.locator('#name').fill('Murali')
    //await page.fill('name','Murali')

})