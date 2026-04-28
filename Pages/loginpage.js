exports.loginpage =

class loginpage{

constructor(page){
this.page=page
this.loginlink='#login2'
this.usernameinpit='#loginusername'
this.passwordinput='#loginpassword';
this.loginbutton='//button[normalize-space()="Log in"]';



}

async gotologinpage(){

await this.page.goto('https://www.demoblaze.com/index.html')

}
async login(username,password){

await this.page.locator(this.loginlink).click()
await this.page.locator(this.usernameinpit).fill(username)
await this.page.locator(this.passwordinput).fill(password)
await this.page.locator(this.loginbutton).click();

}

}


