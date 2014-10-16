// Partly taken from https://github.com/jeresig/i18n-node-2
module.exports = function detectLocale(acceptLanguageHeader, locales){
    var regExp = /(^|,\s*)([a-z-]+)/gi;

    while ((match = regExp.exec(acceptLanguageHeader))){
        var locale = match[2];
        var parts = locale.split("-");

        if (~locales.indexOf(locale)) {
            return locale;
        } else if (parts.length > 1 && ~locales.indexOf(parts[0])) {
            return parts[0];
        }
    }
}