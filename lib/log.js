const levels = {
    ALL: 0,

    DEBUG: 10,
    INFO: 20,
    NOTICE: 30,
    WARN: 40,
    ERROR: 50,
    CRITICAL: 60,

    NONE: 99,
}

let logLevel = levels.NOTICE;

function init() {
    this.debug(`デフォルトログレベル ${levelText(logLevel)}`);
    if(process) {
        if(process.env) {
            if(process.env.LOG_LEVEL) {
                const text = process.env.LOG_LEVEL;
                this.debug(`環境変数 LOG_LEVEL = ${text}`);
                if(text in levels) {
                    const level = levels[text];
                    logLevel = level;
                }
            }
        }
    }
    this.notice(`ログレベル設定 ${levelText(logLevel)}`);
}

function levelText(level) {
    const keys = Object.keys(levels);
    for(let index=0; index<keys.length; index++) {
        const key = keys[index];
        const value = levels[key];
        if(value === level) {
            return `[${key}]`
        }
    }
    return `[${level}]`
}

function buildText(text, level) {
    if(typeof text === 'object') {
        text = JSON.stringify(text);
    }
    return `${levelText(level)}: ${text}`;
}

module.exports.log = (text, level) => {
    if(logLevel <= level) {
        if(level <= levels.WARN) {
            console.log(buildText(text, level));
        } else {
            console.error(buildText(text, level));
        }
    }
}

module.exports.levels = levels;
module.exports.debug = text => this.log(text, levels.DEBUG);
module.exports.info = text => this.log(text, levels.INFO);
module.exports.notice = text => this.log(text, levels.NOTICE);
module.exports.warn = text => this.log(text, levels.WARN);
module.exports.error = text => this.log(text, levels.ERROR);
module.exports.critical = text => this.log(text, levels.CRITICAL);
module.exports.init = init;