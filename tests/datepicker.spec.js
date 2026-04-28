import {test,expect} from '@playwright/test'

test('date picker',async({page})=>

    {

            await page.goto('https://testautomationpractice.blogspot.com/')
           // await page.locator('#datepicker').fill('12/12/2023')

            // await page.click('#datepicker');

             //await page.locator('.ui-datepicker-today').click()

            const year="2026"
            const month="June"
            const Date="22"

            await page.click('#datepicker');

            while(true)
            {
                
                 const currentyear= await  page.locator('.ui-datepicker-year').textContent()
                  const currentmonth=await   page.locator('.ui-datepicker-month').textContent()

                 if(currentyear == year && currentmonth == month)
                 {
                    break;
                 }
                await page.locator('[title="Next"]').click()
            }

         const dates=   await page.$$('.ui-state-default')

         for(const dt of dates)

            if(await dt.textContent()== Date)
            {
                await dt.click()
                break
            }
await page.waitForTimeout(5000)

    }

)