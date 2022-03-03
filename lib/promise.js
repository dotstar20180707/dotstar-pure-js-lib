module.exports.wait = (ms) => new Promise(resolve => {
    setTimeout(() => resolve(), ms);
});

module.exports.utilTrue = async (generator, evaluator) => {
    let value = null;
    while(true) {
        value = await generator();
        if(evaluator(value)) {
            break;
        }
    }
    return value;
}