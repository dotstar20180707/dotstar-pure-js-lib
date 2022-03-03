const log = require('./log');

function getCallerFile()
{
    const err = new Error();

    Error.prepareStackTrace = (_, stack) => stack;

    const stack = err.stack;

    Error.prepareStackTrace = undefined;
    

    return `${stack[2].getFileName()}:${stack[2].getLineNumber()}`;
}

module.exports.bool = (boolean) => {
    log.info(`assertion ${getCallerFile()}`);
    log.debug(`value: ${boolean}}`);
    if(!boolean) {
        throw new Error(`${boolean} is not equals to true`);
    }
}

module.exports.equals = (a, b) => {
    log.info(`assertion ${getCallerFile()}`);
    log.debug(`value: ${a}, ${b}`);
    if(a !== b) {
        throw new Error(`${a} is not equals to ${b}`);
    }
}