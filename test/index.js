var detectLocale = require('../'),
    test = require('grape');

var locales = [
    'en',
    'fr',
    'zn',
    'de'
];

test('Detect normal locale', function(t){
    t.plan(1);

    t.equal(detectLocale('en,en;q=0.8,sk;q=0.6', locales), 'en');
});

test('Detect compound locale', function(t){
    t.plan(1);

    t.equal(detectLocale('en-US,en;q=0.8,sk;q=0.6', locales), 'en');
});