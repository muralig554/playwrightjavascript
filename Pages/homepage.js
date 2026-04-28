exports.homepage = 

class homepage{

    constructor(page){
           this.page=page
         this.productlist='//div[@id="tbodyid"]/div/div/div/h4/a'
         this.addtocart='//a[normalize-space()="Add to cart"]'
         this.cartlink='//a[@id="cartur"]'

    }

async addproducttocart(proructname){

const productlist1 =await this.page.$$(this.productlist)
for(const product of productlist1  )
{

    if(proructname == await product.textContent())
    
    {
await product.click()
break;

    }
    
}

await this.page.on('dailog',async dialog=>{
if (dialog.message().includes('added'))
{

    await dialog.accept()
}


})

await this.page.locator(this.addtocart).click()
}

async gotocart(){

await this.page.locator(this.cartlink).click()
}


}