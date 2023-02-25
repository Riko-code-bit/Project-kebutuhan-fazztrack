// const FrontPage = require('../test/pageobject/front-page');
// const HomePage = require('../test/pageobject/homepage'); 


import FrontPage from '../test/pageobject/front-page';
import HomePage from '../test/pageobject/homepage';

describe('demoblaze login page skenario', () => {
    it('sukses login page keredensial', async () => {
        await FrontPage.open();
        await FrontPage.login('kokocrunch08, Densus88');
        await HomePage.verifyLoginSuccess('kokocrunch08')

    })
})