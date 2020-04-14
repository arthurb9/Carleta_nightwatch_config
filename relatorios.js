module.exports = {
    'chamdos sigsc'(browser) {
        browser
        .url('http://novogic.des.caixa')
    .click('.xn-openable:nth-of-type(3)')
    .pause(5000)
    .click('.xn-openable:nth-of-type(3) > ul > li:nth-of-type(2) > a')
    .pause(5000)
    .click('.nav > li:nth-child(7) > a:nth-child(1)') 
    .pause(5000)
    .click('.col-md-3 > div a')
    .pause(5000)
    browser.end()
      },
}