
var myPage = {}

module.exports = {
    beforeEach: browser => {
        myPage = browser.page.zomatoPage()
        myPage.navigate()
    },

    after: browser => {
        myPage.end()
    },
    'Test 1: Search multiple foods in Salt Lake City': browser => {
        var searchList = require('../testAssets/searchItemsArray')

        for (var i = 0; i < searchList.length; i++) {
            myPage.search5Items(searchList[i])
        }
    },
    'Test 2:  Request link to download the application with email two times': browser => {
        myPage.requestLinkToApplicationThroughEmailTwice('sam.thompson@devmounta.in')
    },
    'Test 3: Request a link to download the application through phone two times': browser => {
        myPage.requestLinkToApplicationThroughPhoneTwice(8444338686)
    }
}