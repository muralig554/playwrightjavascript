import {test,expect, chromium} from '@playwright/test'

/*test('test3',async({page,browserName})=>{

console.log("this is test3")
if(browserName==='chromium')
{

    test.skip()
}

})

test('test4',async({page,browserName})=>{
test.fixme()
console.log("this is test4")

})

test('test5',async({page,browserName})=>{
test.fail()
console.log("this is test5")
expect(1).toBe(2)

})
*/

/*test('test6',async({page,browserName})=>{

console.log("this is test3")
if(browserName==='chromium')
{

    test.fail()
}

})
*/

test('test7',async({page,browserName})=>{

console.log("this is test7")
test.slow()
await page.goto('https://www.demoblaze.com/index.html')

})