import { test,expect } from "@playwright/test";

test('locaterall',async({page}) =>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

 const image=await page.getByAltText('company-branding')
 
 await expect(image).toBeVisible()

 await page.getByPlaceholder('Username').fill("Admin")
 await page.getByPlaceholder('Password').fill("admin123")

 await page.getByRole('button', { type:'submit'}).click();


await page.getByRole('button',{name:'Claim'})

const name=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

await expect(await page.getByText(name)).toBeVisible()

//await page.click("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Claim'])[1]")
await page.click("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name' and normalize-space()='Claim'])[1]");
//const name1=await page.locator('//label[normalize-space()="Reference Id"]')
//await expect(await page.getByText(name1)).toBeVisible()

const name1 = page.locator('//label[normalize-space()="Reference Id"]');
await expect(name1).toBeVisible();
}


)