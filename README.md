# local-detector

Detects locales from an Accept-Language string, against a list of known locales.

# Usage

```
var detectLocale = require('locale-detector');

```

Pass your Accept-Language string, and a list of know locales to the detector function, and it will return a found locale, or undefined if none match.

```
var locales = [
    'en',
    'fr',
    'zn',
    'de'
];

detectLocale('en-US,en;q=0.8,sk;q=0.6', locales);
\\ -> 'en'
```