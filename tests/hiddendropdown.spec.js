import { test,expect } from "@playwright/test";

test('locaterall',async({page}) =>
    
    {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

 await page.getByPlaceholder('Username').fill("Admin")
 await page.getByPlaceholder('Password').fill("admin123")

 await page.getByRole('button', { type:'submit'}).click();

 //await page.waitForTimeout(5000)
  await page.waitForSelector("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']")

 await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click()

await page.waitForTimeout(5000)

await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click()
await page.waitForTimeout(3000)

const dropdownlist=await page.$$("//div[@role='listbox']//span")

{

    for(const options of dropdownlist )

        {

         const jobtitle=  await options.textContent();
         console.log(jobtitle)
         if (jobtitle.includes('QA Engineer'))
         {

            await options.click()
            break;
         }
        }
}
await page.waitForTimeout(5000)
})
