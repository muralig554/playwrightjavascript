import{test,expect} from '@playwright/test'

test( 'Assertions',async({page})=>{

await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

await expect(page).toHaveTitle('nopCommerce demo store. Register')

 const logo=await page.locator('.header-logo')
 await expect(logo).toBeVisible

     await expect(await page.locator('#small-searchterms')).toBeEnabled()

     const checkbox=await page.locator('.form-check-input')
     await expect(checkbox).toBeChecked()

     const radio=await page.locator('#gender-male')
     await radio.click()
     await expect(radio).toBeChecked()

     const attribute=await page.locator('#register-button')
     await expect(attribute).toHaveAttribute('type','submit')

     await expect(await page.locator('.page-title h1')).toHaveText('Register')

     await expect(await page.locator('.page-title h1')).toContainText('Reg')

     

        const text=await page.locator('#FirstName')
        await text.fill('murali')

        await expect(text).toHaveValue('murali')

        await expect(await page.locator('.page-title')).toHaveClass('.page-title')

})