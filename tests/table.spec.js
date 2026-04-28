import {test,expect} from '@playwright/test'

test('table',async({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/')

const table=await page.locator('#productTable')
 
const cloumn=await table.locator('thead tr th')
console.log("number of cloumns in table:",await cloumn.count())
expect(await cloumn.count()).toBe(4)

const rows=await table.locator('tbody tr')
console.log("number of rows in table is:", await rows.count() )
expect(await rows.count()).toBe(5)

//for single product selection

/*const matchedrow=rows.filter({
has:page.locator('td'),
hasText:'Smartwatch'

})

await matchedrow.locator('input').check()
*/

// select mulitple checkboxs using function

//await selectProduct(rows,page,'Smartphone')
//await selectProduct(rows,page,'Tablet')
//await selectProduct(rows,page,'Wireless Earbuds')


//red the single page table data 

/*for(let i=0;i<await rows.count();i++)
{
const row=rows.nth(i)
const tds=row.locator('td')
for(let j=0;j<await tds.count()-1;j++ )
{
    console.log(await tds.nth(j).textContent())
}


}
*/

// read all pages from table

const pages=page.locator('.pagination li a')
console.log("number for pages in table is",pages.count())

for(let p=0;p<await pages.count();p++)
{
if(p>0)
{
   await  pages.nth(p).click()
}
for(let i=0;i<await rows.count();i++)
{
const row=rows.nth(i)
const tds=row.locator('td')
for(let j=0;j<await tds.count()-1;j++ )
{
    console.log(await tds.nth(j).textContent())
}


}
await page.waitForTimeout(5000)
}

await page.waitForTimeout(5000)
})






async function selectProduct(rows,page,name)
{
const matchedrow=rows.filter({
has:page.locator('td'),
hasText:name

})
await matchedrow.locator('input').check()
}