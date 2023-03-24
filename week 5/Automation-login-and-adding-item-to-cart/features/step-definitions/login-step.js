import { Given, Then, When, }  from "@wdio/cucumber-framework";

import FrontPage from "../pageobjects/front-page.js";
import HomePage from "../pageobjects/home-page.js";
import CartPage from "../pageobjects/cart-page.js";


Given(/^I am from on the front page$/, async() => {
    await FrontPage.open()
})

When(/^Im would trying to login with credential username and pwd$/, async() => {
    await FrontPage.login('kokocrunch08','Densus88')
})

Then(/^Im succesccfully login$/, async() => {
    await HomePage.verifyLoginSuccess('kokocrunch08')
})

When(/^Im log out and I adding phone to my chart$/, async() => {
    await FrontPage.logout()
    await browser.pause(1000)
    await FrontPage.pencetBarang()
    await FrontPage.halamanUdhDichart()
})

Then(/^I am succesccfully added to my chart$/, async() => {
    //assert item berhasil ditambahkan dihalaman cart
    await CartPage.verifyAddeditem()
    await browser.pause(1000)



})


