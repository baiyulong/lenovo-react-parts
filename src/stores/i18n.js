import assign from 'object-assign'
class i18n {
    constructor(config) {
        let conf = {
            lang: 'en',
            directory: './locales',
            cookieName: 'lang'
        }
        config = assign({}, conf, config);
        this.lang = config.lang;
        this.directory = config.directory;
        this.cookieName = config.cookieName;
        this.langData = require(`${this.directory}/${this.lang}.js`);
    }
    get lang()
    {
        return this._lang;
    }
    set lang(lang)
    {
        this._lang = lang;
    }
    get directory()
    {
        return this._directory;
    }
    set directory(dir)
    {
        this._directory = dir;
    }
    get cookieName()
    {
        return this._cookieName;
    }
    set cookieName(name)
    {
        this._cookieName = name;
    }
    __() {
        return null;
    }
    translate() {
        return null;
    }
}

module.exports = new i18n()
