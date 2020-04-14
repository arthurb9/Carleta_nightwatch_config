function sweetalert(browser) {
    browser
        .pause(5000)
        .click('a[title=Ativo]')
        .pause(5000)
        .click('.confirm')
        .pause(5000)
        .click('a[title=Inativo]')
        .pause(5000)
        .click('.confirm')
        .pause(5000)
    return browser
}

function acoes(browser) {
    browser
        .click('a[title="Auditoria Tabela"]')
        .pause(5000)
        .assert.elementNotPresent('#sf-resetcontent')
        .click('a[title="Novo"]')
        .pause(5000)
        .assert.elementNotPresent('#sf-resetcontent')
    browser.back()
        .pause(5000)
        .click('a[title="Visualizar"]')
        .pause(5000)
        .assert.elementNotPresent('#sf-resetcontent')
    browser.back()
        .pause(5000)
        .click('a[title="Editar"]')
        .pause(5000)
        .assert.elementNotPresent('#sf-resetcontent')
    browser.back()
        .pause(5000)
        .click('a[title="Auditoria Registro"]')
        .pause(5000)
        .assert.elementNotPresent('#sf-resetcontent')
    return browser
}

export default {
    sweetalert,
    acoes
}