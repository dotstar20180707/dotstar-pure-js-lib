const log = require('./log');

module.exports.bool = (boolean, text,) => {
    log.info(`assertion ${text}`);
    log.debug(`value: ${boolean}`);
    if(!boolean) {
        throw new Error(`${boolean} is not true`);
    }
}

module.exports.equals = (a, b, text) => {
    log.info(`assertion ${text}`);
    log.debug(`value: ${a}, ${b}`);
    if(a !== b) {
        throw new Error(`${a} is not equals to ${b}`);
    }
}