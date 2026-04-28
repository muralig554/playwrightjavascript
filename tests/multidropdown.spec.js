import {test,expect} from'@playwright/test'

test('multidropdown',async({page})=>

    {
await page.goto('https://testautomationpractice.blogspot.com/')

//await page.selectOption('#colors',['Blue','Red','Yellow'])

//const options=await page.locator('#colors Option')
//await expect(options).toHaveCount(7);

//const options=await page.$$('#colors Option')
//await expect(options.length).toBe(7)

/*const options=await page.$$('#colors Option')
for(const option of options)
(

console.log(await option.textContent())
)*/

/*const options=await page.locator('#colors').textContent()

await expect(options.includes('Blue')).toBeTruthy()*/


const options=await page.$$('#colors Option')

for(const option of options)
{
const text= await option.textContent();
if(text && text.includes('Red')) {
        // Use the 'value' attribute or the text to select
        const val = await option.getAttribute('value');
        await page.selectOption('#colors', val);
        break;


}
}
await page.waitForTimeout(5000)
    })