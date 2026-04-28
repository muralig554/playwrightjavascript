import {test,expect} from '@playwright/test'

test('report1',async({page})=>{


await page.goto('https://www.demoblaze.com/')

await expect(page).toHaveTitle('STORE')

})

test('report2',async({page})=>{


await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page).toHaveTitle('OrangeHRM')
})
