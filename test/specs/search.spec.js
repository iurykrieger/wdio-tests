const assert = require('assert');

describe('[telhanorte] search', function() {
    before(() => {
        browser.timeouts('page load', 99999);
        browser.timeouts('script', 30000);
    });

    it('verifies if home form points to intersect search', () => {
        browser.url('http://www.telhanorte.com.br/');
        browser.setValue('#nm-form_input', 'telha');
        browser.click('.ac-suggest-term');

        const harryPotterUrl = browser.getUrl();
        assert.equal(harryPotterUrl, 'busca.saraiva.com.br/busca?q=harry+potter');
    });
});