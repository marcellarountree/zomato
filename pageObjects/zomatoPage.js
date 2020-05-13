var zomatoCustomCommands = {
    search5Items: function (item) {
        this
            .setValue('@itemSearchInput', item)
            .click('@searchButton')
            .expect.element('@titleResult').text.to.contain(item)
        this
            .click('@homePageButton')
            .pause(5000)
        return this
    }
}



module.exports = {
    url: 'https://www.zomato.com/salt-lake-city',
    commands: [zomatoCustomCommands],
    elements: {
        itemSearchInput: 'input[class = "sc-fjmCvl dRCuSW"]',
        searchButton: 'div[class = "sc-CtfFt dwJcvv"]',
        titleResult: 'h1',
        homePageButton: 'a[class = "logo__container left"]',
    }
}

