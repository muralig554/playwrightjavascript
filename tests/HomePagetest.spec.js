const{test,expect}=require('@playwright/test');
test('Home Page',async({page})=>{
await page.goto('https://www.demoblaze.com/');

const PageTitle=page.title();
console.log('Page title is:',PageTitle);

await expect(page).toHaveTitle('STORE');

const pageurl=page.url();

console.log('page url is:',pageurl)

await expect(page).toHaveURL('https://www.demoblaze.com/')
await page.close();
})