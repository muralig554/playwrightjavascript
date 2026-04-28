import {test,expect} from '@playwright/test'

test('dropdown' ,async({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/')

//await page.locator('#country').selectOption({label:'India'})
//await page.locator('#country').selectOption('India')
//await page.locator('#country').selectOption({value:'uk'})
//await page.selectOption('#country','India')
//await page.locator('#country').selectOption({index: 1});

 //approch1---verify count
//const dropdown=await page.locator('#country option')
//await expect(dropdown).toHaveCount(10)

          //approch2---verify total numbers of rows
//const dropdown=await page.$$('#country option')
//console.log("number of options is:",dropdown.length)

//await expect(dropdown.length).toBe(10)

        //approch3-value is there or not?

     //const dropdwon=await page.locator('#country').textContent()
      //await expect (dropdwon.includes('India')).toBeTruthy()

//approch 4 with loop 

/*const option=await page.$$('#country option')
let status=false
for( const option1  of option )
{
//console.log(await option1.textContent() )
let value=await option1.textContent()
if(value.includes('France'))
{
    status=true
    break
}
    
}
expect(status).toBeTruthy()
*/

//5 aproch select vlaue with loop 

const options = await page.$$('#country option'); // Plural naming is clearer

for (const option of options) {
    const text = await option.textContent();
    if (text && text.includes('France')) {
        // Use the 'value' attribute or the text to select
        const val = await option.getAttribute('value');
        await page.selectOption('#country', val);
        break;

     }
    }
await page.waitForTimeout(5000)

}

)