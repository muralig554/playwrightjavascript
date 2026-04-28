import {test, expect } from "@playwright/test";
import {loginpage} from '../Pages/loginpage.js'
import {homepage } from '../Pages/homepage.js';
import { cartpage } from '../Pages/cartpage.js';

test('test',async({page})=>{
const login = new loginpage(page)
await login.gotologinpage()
await login.login('gmr554','test@123')

//await page.waitForTimeout(6000)
await page.waitForSelector('#logout2')
await expect(await page.locator('#logout2')).toBeVisible();
//test.slow()

//home
 const home = new homepage(page)

  await home.addproducttocart('Nexus 6')
  await page.waitForTimeout(4000)
  await home.gotocart()
await page.waitForTimeout(5000)

//cart

const cart=new cartpage(page)
const status=await cart.checkproductincart('Nexus 6')
expect (await status).toBe(true)
await page.waitForTimeout(5000)
})