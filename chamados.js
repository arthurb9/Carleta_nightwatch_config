    //  const URLDEFAULT = 'http://novogic.des.caixa'
    //  const URLDEFAULT = 'http://novogic.hom.caixa'
    
    module.exports = {
  // 'Abrindo Tela de Chamado GIC - testando sweet alert'(browser) {
  //   browser
  //     .url('http://novogic.des.caixa/chamados_telefonicos/create?co_fila=29')
  //     .waitForElementVisible('.sweet-alert', 5000)
  //     .assert.containsText('.sweet-alert > h2', 'Atenção')
  //     .click('.sweet-alert .confirm')
  //     .waitForElementNotVisible('.sweet-alert', 5000)
  //     .pause(3000);
  //    },
  // 'verificação de campos'(browser) {
  //   browser
  //     .assert.elementPresent('input[name=nu_cpf_cnpj]')
  //     .assert.elementPresent('#nu_chamado_cliente')
  //     .assert.elementPresent('input[name=no_contato]')
  //     .assert.elementPresent('input[name=nu_telefone_contato]')
  //     .assert.elementPresent('input[name=nu_cpf_contato]')
  //     .assert.elementPresent('input[name=nu_telefone_contato]')
  //     .assert.elementPresent('input[name=nu_cpf_contato]')
  //     .assert.elementPresent('#co_fila_chosen')
  //     .assert.elementPresent('#co_produto_chosen')
  //     .assert.elementPresent('#co_tipo_solucao_chosen')
  //     .assert.elementPresent('#co_script_chosen')
  //     .assert.elementPresent('input[name=ic_chamado_interrompido]')
  //     .assert.elementPresent('#co_motivo_interrupcao_chosen')
  //     .assert.elementPresent('#co_status_chamado_chosen')
  //     .assert.elementPresent('#co_pasta_chosen')
  //     .assert.elementPresent('#nu_sigsc')
  //     .assert.elementPresent('#dh_agendamento_sigsc')
  //     .assert.elementPresent('#dh_sigsc_picker')
  //     .assert.elementPresent('#hora_agendamento_sigsc')
  //     .assert.elementPresent('#dh_sigsc_timepicker')
  //   },
  // 'preenchimento de campos'(browser) {
  //   browser
  //     .setValue('input[name=nu_cpf_cnpj]', ['05541011574', browser.Keys.ENTER])
  //     .setValue('#nu_chamado_cliente', '180703000942')
  //     .setValue('input[name=no_contato]', 'Fulaninho')
  //     .setValue('input[name=nu_telefone_contato]', '789456123')
  //     .setValue('input[name=nu_cpf_contato]', '05541011574')
  //     .click('#co_fila_chosen')
  //     .click('.chosen-drop > .chosen-results > li:nth-of-type(23)')
  //     .click('#co_produto_chosen')
  //     .waitForElementVisible('#co_produto_chosen > .chosen-drop > .chosen-results > li', 5000)
  //     .click('#co_produto_chosen > .chosen-drop > .chosen-results > li ')
  //     .click('#co_tipo_solucao_chosen')
  //     .waitForElementVisible('#co_tipo_solucao_chosen > .chosen-drop > .chosen-results > li', 5000)
  //     .click('#co_tipo_solucao_chosen > .chosen-drop > .chosen-results > li:nth-of-type(2)')
  //     .click('#co_script_chosen')
  //     .waitForElementVisible('#co_script_chosen > .chosen-drop > .chosen-results > li', 10000)
  //     .click('#co_script_chosen > .chosen-drop > .chosen-results > li')
  //     .waitForElementVisible('.copyPassoContentBtn', 15000)
  //     .click('.copyPassoContentBtn[target=resposta_passo_0]')
  //     .waitForElementVisible('.nextPasso', 10000)
  //     .click('.nextPasso')
  //     .pause(15000)
  //     browser.end()
  // },
  'pesquisa administração'(browser) {
    browser
      .url('http://novogic.des.caixa')
      .click('.xn-openable')
      .pause(5000)
      .click('.xn-openable > ul > li > a')
      .waitForElementVisible('#no_agencia', 10000)
      .setValue('#no_agencia','AP')
      .click('input[type=radio][value=""]')
      .click('.btn:nth-of-type(2)')
      .pause(10000)
      browser.end()
    },
  'pesquisa ambientes de atendimento'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(2) > a')
    .waitForElementVisible('input[name=no_ambiente]', 5000)
    .setValue('input[name=no_ambiente]', 'CN')
    .waitForElementVisible('input[name=sg_ambiente]', 5000)
    .setValue('input[name=sg_ambiente]', 'CERAT')
    .waitForElementVisible('input[name=nu_cgc]', 5000)
    .setValue('input[name=nu_cgc]', '7392')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa Aplicativos'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(3) > a')
    .waitForElementVisible('input[name=no_aplicativo]', 5000)
    .setValue('input[name=no_aplicativo]', 'SIACC')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa Caixa Postal'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(4) > a')
    .waitForElementVisible('input[name=no_caixa_postal]', 5000)
    .setValue('input[name=no_caixa_postal]', 'LIXO')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa Clientes'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(5) > a')
    .waitForElementVisible('input[name=no_cliente]', 10000)
    .setValue('input[name=no_cliente]', 'MARIA')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa Equipes'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(6) > a')
    .waitForElementVisible('input[name=no_equipe]', 10000)
    .setValue('input[name=no_equipe]', 'EQUIPE')
    .click('#co_ambiente_atendimento_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(2)')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa Filas'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(7) > a')
    .waitForElementVisible('input[name=no_fila]', 10000)
    .setValue('input[name=no_fila]', 'CXA')
    .click('#co_segmento_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(2)')
    .click('#co_ambiente_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(2)')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa gerencia'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(8) > a')
    .waitForElementVisible('input[name=no_gerencia]', 10000)
    .setValue('input[name=no_gerencia]', 'GESTAO')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa Incidentes'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(9) > a')
    .waitForElementVisible('input[name=no_incidente]', 10000)
    .setValue('input[name=no_incidente]', 'DIFICULDADE')
    .click('#co_fila_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(34)')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa Links uteis'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(10) > a')
    .waitForElementVisible('input[name=no_link_util]', 10000)
    .setValue('input[name=no_link_util]', 'VAN')
    .waitForElementVisible('input[name=de_link_util]', 10000)
    .setValue('input[name=de_link_util]', 'CAIXA')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa Meios Acionamento'(browser) {
      browser
      .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(11) > a')
      .waitForElementVisible('input[name=no_meio_acionamento]', 10000)
      .setValue('input[name=no_meio_acionamento]', 'GIC')
      .click('input[type=checkbox][value="S"]')
      .click('.btn:nth-of-type(2)')
      .pause(10000)
      browser.end()
  },
  'pesquisa Mensagens Padrões'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(12) > a')
    .waitForElementVisible('input[name=no_mensagem_email_padrao]', 10000)
    .setValue('input[name=no_mensagem_email_padrao]', 'TESTE')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa Motivos de não resolução'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(13) > a')
    .waitForElementVisible('input[name=de_motivo_interrupcao]', 10000)
    .setValue('input[name=de_motivo_interrupcao]', 'IMPROCEDENTE')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa Motivos SIOUV'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(15) > a')
    .waitForElementVisible('input[name=de_motivo_siouv]', 15000)
    .setValue('input[name=de_motivo_siouv]', 'Pagamento')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisa Paginas de suporte'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(17) > a')
    .waitForElementVisible('input[name=no_menu_suporte]', 15000)
    .setValue('input[name=no_menu_suporte]', 'MANUAL')
    .click('#co_fila_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(12)')
    .click('#co_produto_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(2)')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisas Pastas'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(18) > a')
    .waitForElementVisible('input[name=no_pasta]', 10000)
    .setValue('input[name=no_pasta]', '2º')
    .click('#nu_nivel_atendimento_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(2)')
    .click('#co_ambiente_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(2)')
    .click('#co_fila_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(23)')
    .click('input[type=checkbox][name=ic_telefonico][value="S"]')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisas prefeituras'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(19) > a')
    .waitForElementVisible('input[name=nu_cnpj]', 10000)
    .setValue('input[name=nu_cnpj]', '')
    .click('#co_uf_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(5)')
    .setValue('input[name=no_municipio]', 'Barra')
    .setValue('input[name=no_agencia]', 'Barra')
    .click('#co_gifab_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(37)')
    .click('#co_sr_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(117)')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisas produtos'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(20) > a')
    .waitForElementVisible('input[name=no_produto]', 10000)
    .setValue('input[name=no_produto]', 'Cartão')
    .click('#co_fila_chosen')
    .click('.chosen-drop > .chosen-results > li:nth-of-type(4)')
    .click('input[type=radio][value=""]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
  },
  'pesquisas questionarios'(browser) {
    browser
    .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(21) > a')
    .waitForElementVisible('input[name=no_pergunta]', 10000)
    .setValue('input[name=no_pergunta]', 'teste')
    .click('input[type=radio][value="T"]')
    .click('.btn:nth-of-type(2)')
    .pause(10000)
    browser.end()
    },
    'pesquisas remetente'(browser) {
      browser
      .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(22) > a')
      .waitForElementVisible('input[name=no_remetente]', 10000)
      .setValue('input[name=no_remetente]', 'teste')
      .setValue('input[name=no_email]', 'teste')
      .click('#co_equipe_chosen')
      .click('.chosen-drop > .chosen-results > li:nth-of-type(4)')
      .click('input[type=radio][value=""]')
      .click('.btn:nth-of-type(2)')
      .pause(10000)
      browser.end()
    },
    'pesquisas segmentos'(browser) {
      browser
      .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(23) > a')
      .waitForElementVisible('input[name=no_segmento]', 10000)
      .setValue('input[name=no_segmento]', 'canais')
      .click('input[type=radio][value=""]')
      .click('.btn:nth-of-type(2)')
      .pause(10000)
      browser.end()
    },
    'pesquisas status chamado'(browser) {
      browser
      .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(24) > a')
      .waitForElementVisible('input[name=no_status_chamado]', 10000)
      .setValue('input[name=no_status_chamado]', 'pendente')
      .click('#ic_status_fechado_chosen')
      .click('.chosen-drop > .chosen-results > li:nth-of-type(2)')
      .click('input[type=radio][value=""]')
      .click('.btn:nth-of-type(2)')
      .pause(10000)
      browser.end()
    },
    'pesquisas superintendencias'(browser) {
      browser
      .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(25) > a')
      .waitForElementVisible('input[name=no_superintendencia]', 10000)
      .setValue('input[name=no_superintendencia]', 'su')
      .setValue('input[name=sg_superintendencia]', 'su')
      .click('input[type=radio][value=""]')
      .click('.btn:nth-of-type(2)')
      .pause(10000)
      browser.end()
    },
    'pesquisas tipos convenios'(browser) {
      browser
      .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(26) > a')
      .waitForElementVisible('input[name=no_convenio]', 10000)
      .setValue('input[name=no_convenio]', 'sicap')
      .click('input[type=radio][value=""]')
      .click('.btn:nth-of-type(2)')
      .pause(10000)
      browser.end()
    },
    'pesquisa tipos de soluções'(browser) {
        browser
        .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(27) > a')
        .waitForElementVisible('input[name=no_tipo_solucao]', 10000)
        .setValue('input[name=no_tipo_solucao]', 'classificar')
        .click('#co_fila_chosen')
        .click('.chosen-drop > .chosen-results > li:nth-of-type(30)')
        .click('#co_produto_chosen')
        .click('.chosen-drop > .chosen-results > li:nth-of-type(2)')
        .click('input[type=radio][value=""]')
        .click('.btn:nth-of-type(2)')
        .pause(10000)
        browser.end()
      },
      'pesquisa VANS'(browser) {
        browser
        .url('http://novogic.des.caixa')
    .click('.xn-openable')
    .pause(5000)
    .click('.xn-openable > ul > li:nth-of-type(28) > a')
        .waitForElementVisible('input[name=no_van]', 15000)
        .setValue('input[name=no_van]', 'GXS')
        .click('input[type=radio][value=""]')
        .click('.btn:nth-of-type(2)')
        .pause(10000)
        browser.end()
      },  
    'Logout' (browser) {
      browser
      .url('http://novogic.des.caixa')
      .click('.page-content > ul > li:nth-of-type(2) > a > .fa-sign-out')
      .click('#mb-signout a')
      .pause(10000)
      browser.end()
    },
    /*'pesquisa Segurança funcionalidades'(browser) {
      browser
      .url('http://novogic.des.caixa')
  .click('.xn-openable:nth-of-type(5)')
  .pause(5000)
  .click('.xn-openable:nth-of-type(5) > ul > li:nth-of-type(2) > a')
  .click('#no_funcionalidade')
  .setValue('input[name=no_funcionalidade]', 'chamados') 
  .click('#co_modulo_chosen')  
  .click('.chosen-drop > .chosen-results > li:nth-of-type(2)') 
  .click('input[type=radio][value="T"]')
  .click('.btn:nth-of-type(2)')
      .pause(10000)
      browser.end()
    },
    'pesquisa Segurança parametros'(browser) {
      browser
      .url('http://novogic.des.caixa')
  .click('.xn-openable:nth-of-type(5)')
  .pause(5000)
  .click('.xn-openable:nth-of-type(5) > ul > li:nth-of-type(3) > a')
  .setValue('input[name=no_parametro]', 'TMA')
  .setValue('input[name=de_valor]', '3')
  .click('input[type=radio][value=""]')
  .click('.btn:nth-of-type(2)')
  .pause(5000)
  browser.end()
    },
    'pesquisa Segurança perfis'(browser) {
      browser
      .url('http://novogic.des.caixa')
  .click('.xn-openable:nth-of-type(5)')
  .pause(5000)
  .click('.xn-openable:nth-of-type(5) > ul > li:nth-of-type(4) > a')
  .setValue('input[name=no_perfil]', 'CAIXA')
  .click('#nu_nivel_atendimento_chosen')
  .click('.chosen-drop > .chosen-results > li:nth-of-type(2)')
  .click('input[type=checkbox][name=ic_telefonico][value="S"]')
  .click('input[type=radio][value="T"]')
  .click('.btn:nth-of-type(2)')
  .pause(5000)
  browser.end()
    },
    'pesquisa Segurança SQL'(browser) {
      browser
      .url('http://novogic.des.caixa')
  .click('.xn-openable:nth-of-type(5)')
  .pause(5000)
  .click('.xn-openable:nth-of-type(5) > ul > li:nth-of-type(5) > a')
  .pause(5000)
  browser.end()
    },
    'pesquisa Segurança Usuarios'(browser) {
      browser
      .url('http://novogic.des.caixa')
  .click('.xn-openable:nth-of-type(5)')
  .pause(5000)
  .click('.xn-openable:nth-of-type(5) > ul > li:nth-of-type(6) > a')
  .setValue('input[name=name]', 'AD')
  .click('#co_perfil_chosen')
  .click('.chosen-drop > .chosen-results > li:nth-of-type(7)')
  .click('input[type=radio][value="T"]')
  .click('.btn:nth-of-type(2)')
  .pause(5000)
  browser.end()
    },*/
//     'pesquisa Segurança auditoria'(browser) {
//       browser
//       .url('http://novogic.des.caixa')
//   .click('.xn-openable:nth-of-type(5)')
//   .pause(5000)
//   .click('.xn-openable:nth-of-type(5) > ul > li > a')
// .click('#co_funcionalidade_chosen')
// .click('.chosen-container:not(.chosen-with-drop)')
// .click('.chosen-drop > .chosen-results > li:nth-of-type(7)')
// .click('.chosen-container: nth-of-type(2)')
// .useXpath()
// .click('(//div[@class="chosen-container"])[1]')
// .pause(5000)
/*.click('.chosen-drop > .chosen-results > li:nth-of-type(4)')
.click('#co_usuario_chosen')
.click('.chosen-drop > .chosen-results > li:nth-of-type(4)')*/
// .pause(5000)
// browser.end()
//     }
   }
