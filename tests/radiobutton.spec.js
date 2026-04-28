import {test,expect} from  '@playwright/test'

test('Input',async({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/')


    await page.locator('#male').check();

     await expect(await page.locator('#male')).toBeChecked()
    await expect(await page.locator('#male').isChecked()).toBeTruthy();
    await expect(await page.locator('#female').isChecked()).toBeFalsy();
     

})