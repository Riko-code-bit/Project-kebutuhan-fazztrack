import { Given, Then, When }  from "@wdio/cucumber-framework";

import FrontPage from "../pageobjects/front-page.js";
import HomePage from "../pageobjects/home-page.js";

Given(/^I am from on the front page$/, async() => {
    await FrontPage.open()
})

When(/^Im would trying to login with credential username and pwd$/, async() => {
    await FrontPage.login('kokocrunch08','Densus88')
})

Then(/^Im succesccfully login$/, async() => {
    await HomePage.verifyLoginSuccess('kokocrunch08')
})