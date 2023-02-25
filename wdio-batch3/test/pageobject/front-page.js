// const Page = require('./page')

import Page from './page'

class FrontPage extends Page {

    get InputUsername() { return $('#loginusername')
}

get inputPassword() { return $('#loginpassword')}

get buttonLogin() { return $(`[onclick="login()"]`)
}

async login(username, password) {
    await this.InputUsername.setValue(username)
    await this.inputPassword.setValue(password)

    await this.buttonLogin.click()
}

open() {
    return super.open('index.html')
}
}

// module exports
module.exports = new FrontPage()