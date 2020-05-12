
var myPage = {}

module.exports = {
    beforeEach: browser => {
        browser.page.zomatoPage()
        myPage.navigate()
    },

    after: browser => {
       myPage.end() 
    },

}