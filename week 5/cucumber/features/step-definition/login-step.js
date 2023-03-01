import { Given, Then, When }  from "@wdio/cucumber-framework";

import frontPage from "../pageobject/front-page.js";
import HomePage from "../pageobject/home-page.js";

Given(/^I am from on the front page$/, async() => {
    await frontPage.open()
})

When(/^Im would trying to login with credential username and pwd$/, async() => {
    await frontPage.login('kokocrunch08','Densus88')
})

Then(/^Im succesccfully login$/, async() => {
    await HomePage.verifyLoginSuccess('kokocrunch08')
})