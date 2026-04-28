import {test,expect} from '@playwright/test'

test.skip('upload file',async({page})=>
{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.waitForSelector('#singleFileInput')
await page.locator('#singleFileInput').click()
await page.locator('#singleFileInput').setInputFiles('tests/uploadfiles/Murali_QA_Resume.pdf')

await page.locator("//button[normalize-space()='Upload Single File']").click()

await page.waitForTimeout(20000)



})

test('multipule file',async({page})=>
{

await page.goto('https://testautomationpractice.blogspot.com/')

//await page.waitForSelector('#multipleFilesInput')
//await page.locator('#multipleFilesInput').click()
//await page.locator('#multipleFilesInput').
//setInputFiles(['tests/uploadfiles/Murali_QA_Resume.pdf','tests/uploadfiles/Murali_Test Analyst (2).pdf'])

 await page.setInputFiles('#multipleFilesInput', [
    'tests/uploadfiles/Murali_QA_Resume.pdf',
    'tests/uploadfiles/Murali_Test Analyst (2).pdf' ]);

//await page.locator("//button[normalize-space()='Upload Multiple Files']']").click()

  await page.locator("//button[normalize-space()='Upload Multiple Files']").click();

await page.waitForTimeout(10000)

  const status = page.locator('#multipleFilesStatus');

  await expect(status).toContainText('Murali_QA_Resume.pdf');
  await expect(status).toContainText('Murali_Test Analyst (2).pdf');

  // Clear uploaded files
  await page.setInputFiles('#multipleFilesInput', []);

//expect(await page.locator("//*[@id='multipleFilesStatus']/text()[2])")).toHaveText('Murali_QA_Resume.pdf, Size: 721988 bytes, Type: application/pdf')
//expect(await page.locator("//*[@id='multipleFilesStatus']/text()[3])")).toHaveText('Murali_Test Analyst (2).pdf, Size: 526635 bytes, Type: application/pdf')

//await page.waitForTimeout(10000)

//await page.locator('#multipleFilesInput').setInputFiles([])
await page.waitForTimeout(10000)
})