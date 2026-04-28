import{test,expect} from '@playwright/test'

test.skip( 'home page',async({page})=>{

await page.goto('https://www.demoblaze.com/index.html');

 await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').fill('gmr554');
 
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();

 const product= await page.$$('.hrefch')
 await expect(product).toHaveLength(9)
  
  for(const produrctall of product)
  {
  console.log(await produrctall.textContent());
  }
 await page.locator('#logout2').click()


})


test( 'add product page',async({page})=>{

await page.goto('https://www.demoblaze.com/index.html');

 await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').fill('gmr554');
 
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();

 
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()

  page.waitForSelector("//a[normalize-space()='Add to cart']")

  await page.locator("//a[normalize-space()='Add to cart']").click()

  page.on('dialog',async dialog=>{

  expect(dialog.message()).toContain('Product added.')
  dialog.accept()

  })


 await page.locator('#logout2').click()


})