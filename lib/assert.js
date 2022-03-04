const log = require('./log');

function getCallerFile(depth = 2)
{
    const err = new Error();

    Error.prepareStackTrace = (_, stack) => stack;

    const stack = err.stack;

    Error.prepareStackTrace = undefined;
    

    return `${stack[depth].getFileName()}:${stack[depth].getLineNumber()}`;
}
module.exports.getCallerFile = getCallerFile;

module.exports.bool = (boolean) => {
    log.info(`assertion ${getCallerFile()}`);
    log.debug(`value: ${boolean}`);
    if(!boolean) {
        throw new Error(`${boolean} is not equals to true`);
    }
    log.info('assertion success');
}

module.exports.equals = (a, b) => {
    log.info(`assertion ${getCallerFile()}`);
    log.debug(`value: ${a}, ${b}`);
    if(a !== b) {
        throw new Error(`${a} is not equals to ${b}`);
    }
    log.info('assertion success');
}

module.exports.equalsLoose = (a, b) => {
    log.info(`assertion ${getCallerFile()}`);
    log.debug(`value: ${a}, ${b}`);
    if(a != b) {
        throw new Error(`${a} is not equals to ${b}`);
    }
    log.info('assertion success');
}