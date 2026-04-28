import {test,expect} from  '@playwright/test'

test('checkbox',async({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/')

const checkboxlocators=[
    "//input [@id='sunday' and @type='checkbox']",
    "//input [@id='wednesday' and @type='checkbox']",
    "//input [@id='saturday' and @type='checkbox']"

];

for(const locator1 of checkboxlocators)
{

    await page.locator(locator1).check();
}

await page.waitForTimeout(5000);

for(const locator1 of checkboxlocators)
{
if(await page.locator(locator1).isChecked())
{
await page.locator(locator1).uncheck();
}
    
}

await page.waitForTimeout(5000);
}


)