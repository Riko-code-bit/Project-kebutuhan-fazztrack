import Page from './page.js'

class FrontPage extends Page {

    get inputUsername() { 
        return $('#loginusername')
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

    get buttonLogOut() {
        return $(`[onclick='logOut()']`)
    }

    get linkBarang() {
        return $(`#tbodyid > div:nth-of-type(1) .hrefch`)
    }

    get pencetChart() {
        return $(`.btn-success`)
    }

    get buttonChart() {
        return $(`#cartur`)
    }

    get showProduct() {
        return $(`.col-lg-8 > h2`)
    }

    get home() {
        return $(`.nav-link[href='index.html']`)
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

    async logout() {
        await this.buttonLogOut.click()
    }

    async pencetBarang() {
        await this.linkBarang.click()
        await this.halamanBarang()
    }

    async halamanBarang() {
        await this.pencetChart.click()
        await this.buttonChart.click()
        await this.halamanUdhDichart()
    }

    async halamanUdhDichart() {
        await browser.pause(2000)   
    }

    open() {
        return super.open('index.html')
    }
}

export default new FrontPage()