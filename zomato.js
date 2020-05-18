let collectionSearch = require ('../testAssets/collectionSearch')
let myPage = {} 
module.exports = {
    beforeEach: browser => {
        myPage = browser.page.zomatoPageObjects()
        myPage.navigate()
    },

    after: browser => {
        myPage.end()
    },
    'Collection ': browser => {
        collectionSearch.forEach(test => {
            myPage
                .pause(5000)
                .collection(test)
        })
    }
}