module.exports = {
    'Demo test globo'(browser) {
      browser
        .url('https://www.globo.com/')
        .click('a[href="https://oglobo.globo.com/sociedade/coronavirus-brasil-tem-17857-casos-confirmados-941-mortes-24362355"]')
        .pause(10000)
        .end();
    }
  };