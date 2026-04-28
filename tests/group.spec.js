import {test,expect} from '@playwright/test'

test.beforeAll(async()=>
{
console.log('bofre all hook')

})

test.afterAll(async()=>

    {
console.log('after all hook')

    })

    test.beforeEach(async()=>{

        console.log('before earch hook')
    })

     test.afterEach(async()=>{

        console.log('after earch hook')
    })

test.describe.skip('group1', ()=>{


test('testcase1',async ({page})=>

    {

console.log('test case1')
    })

    test('testcase2',async ({page})=>

    {

console.log('test case2')
    })


})

test.describe('group2', ()=>{


test('testcase3',async ({page})=>

    {

console.log('test case3')
    })

    test('testcase4',async ({page})=>

    {

console.log('test case4')
    })


})