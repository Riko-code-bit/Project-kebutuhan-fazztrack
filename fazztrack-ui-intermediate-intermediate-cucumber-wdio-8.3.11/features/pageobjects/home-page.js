// const Page = require('./page')
import Page from './page.js'

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    // get footer() {
    //     return $(`#footc`)

    // }
    //     async scrollToFooter() {

    // }
    async buttonItemName(itemName){
        //back quote - dibawah tombol ESC
        return await $(`//a[text()='${itemName}']`)
    }

    

    async clickItemName(itemName){
        await (await this.buttonItemName(itemName)).click()
    }



   
   

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }
}

// module.exports = new HomePage();
export default new HomePage()