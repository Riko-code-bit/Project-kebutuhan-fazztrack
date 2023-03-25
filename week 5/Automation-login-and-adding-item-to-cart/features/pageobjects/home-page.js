import Page from './page.js'

class HomePage extends Page {
    get accountName() { 
        return $('#nameofuser')
    }

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }
}
export default new HomePage() 
