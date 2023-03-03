// const Page = require('./page')

import Page from './page.js'

class FrontPage extends Page {

get inputUsername() { return $('#loginusername')
}

get inputPassword() { 
    return $('#loginpassword')
}

get buttonLogin() {
     return $(`[onclick='logIn()']`)
    }

get linkTextLogin() {
    return $(`[data-target='#logInModal']`)
}

async isBtnLogginDisplayed() {
    await (await this.buttonLogin).waitForDisplayed(2000)
    return await this.buttonLogin.isDisplayed()
}

async login(username, password) {
    await this.linkTextLogin.click()
    await this.isBtnLogginDisplayed()
    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)

    await this.buttonLogin.click()
}

open() {
    return super.open('index.html')
}
}

// module exports
export default new FrontPage()