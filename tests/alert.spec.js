import {test,expect} from '@playwright/test'

test.skip('simple alert',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

page.on('dialog',async dialog=>
{
expect (dialog.type()).toContain('alert')
expect(dialog.message()).toContain('I am an alert box!')
await dialog.accept();
})
await page.click("//button[@id='alertBtn']")

await page.waitForTimeout(5000)

})
//2
test.skip('conformation',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

page.on('dialog',async dialog=>{

 expect(dialog.type()).toContain('confirm')
 expect(dialog.message()).toContain('Press a button!')
 dialog.accept()

})

await page.click("//button[@id='confirmBtn']")
expect (page.locator("//p[@id='demo']")).toBeVisible()//or tohavetext also we can use
await page.waitForTimeout(5000)
})
//3
test('promp laert',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('prompt')

        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        dialog.accept('murali');


    })

await page.click("//button[@id='promptBtn']")
expect (page.locator("//p[@id='demo']")).toBeVisible()
})

