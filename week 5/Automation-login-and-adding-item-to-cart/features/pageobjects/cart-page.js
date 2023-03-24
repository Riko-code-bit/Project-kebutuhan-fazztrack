import Page from './page.js'

class CartPage extends Page {
    get gambarItem() { return $(`[src='imgs/galaxy_s6.jpg']`)}

    async verifyAddeditem() { 
        return await expect(await this.gambarItem).toBeDisplayed()}
}

export default new CartPage()