const log = require('./log');

function getCallerFile()
{
    const err = new Error();

    Error.prepareStackTrace = (_, stack) => stack;

    const stack = err.stack;

    Error.prepareStackTrace = undefined;
    
    return stack[1].getFileName();
}

module.exports.bool = (boolean) => {
    this.equals(boolean, true);
}

module.exports.equals = (a, b) => {
    log.info(`assertion ${text} ${getCallerFile}`);
    log.debug(`value: ${a}, ${b}`);
    if(a !== b) {
        throw new Error(`${a} is not equals to ${b}`);
    }
}