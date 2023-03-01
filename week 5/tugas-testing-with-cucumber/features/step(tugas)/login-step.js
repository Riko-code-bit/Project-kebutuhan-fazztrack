import frontPage from "../pageobject/front-page.js";
import HomePage from "../pageobject/home-page.js";

Given(/^I am from on the front page$/, async() => {
    await frontPage.open()
})

When(/^Im would trying to logout$/, async() => {
    await frontPage.login('kokocrunch08','Densus88')
})

Then(/^Im succesccfully logout$/, async() => {
    await HomePage.verifyLoginSuccess('kokocrunch08')
})