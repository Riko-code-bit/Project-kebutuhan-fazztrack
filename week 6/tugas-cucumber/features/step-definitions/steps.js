import {Given, When, Then} from '@wdio/cucumber-framework'

import FrontPage from '../pageobject/front-page.js'
import ElementPage from '../pageobject/element-page.js'
import InteractionPage from '../pageobject/Interaction-page.js'

Given(/^I am from on the front page$/, async() => {
    await FrontPage.open()
})

When(/^I am click element im redirecting to element page$/, async() => {
    await FrontPage.klikElement()
    await ElementPage.klikButton()
  })

Then(/^I am clicking every button in element page$/, async() => {
    await ElementPage.klikOne()
    await ElementPage.klikTwo()
    await ElementPage.klikThree()
    await browser.execute('window.scrollBy(0, 1000)') // scroll to bottom
    await ElementPage.klikInteractions()
    await browser.pause(2000)
})

When(/^I click Interaction button$/, async() => {
    await InteractionPage.klikDropable()
    await browser.pause(3000)
    await InteractionPage.dragAndDrop1()
}
)

Then(/^I am validate the css property$/, async() => {
    await InteractionPage.validateCss()
  
})
  