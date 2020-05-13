var myPage = {}

module.exports = {
    beforeEach: browser => {
        myPage = browser.page.zomatoPageObjects()
        myPage.navigate()
    },

    after: browser => {
        myPage.end()
    },

    'Test 1: Search multiple restaurants/foods in Salt Lake City': browser => {
        var searchList = require('../testAssets/searchCitiesObject')

        for (var i = 0; i < searchList.length; i++) {
            myPage.search5Items(searchList[i])
        }
    },
}