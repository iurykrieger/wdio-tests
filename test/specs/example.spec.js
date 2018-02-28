const assert = require('assert');

describe('Chaordic search', function() {
    it('verifies chaordic google result', () => {
        browser.url('https://google.com.br/');
        browser.setValue('#lst-ib', 'chaordic');
        browser.click('[name="btnK"]');

        const firstLink = $('#search a').getAttribute('href');
        assert.equal(firstLink, 'https://www.chaordic.com.br/');
    });

    it('verifies chaordic site title', () => {
        browser.url('https://www.chaordic.com.br');
        var title = browser.getTitle();

        assert.equal(title, 'Linx+Neemu+Chaordic');
    })
});