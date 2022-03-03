module.exports.wait = (ms) => new Promise(resolve => {
    setTimeout(() => resolve(), ms);
});

module.exports.untilTrue = async (generator, evaluator, ms = 100) => {
    let value = null;
    while(true) {
        value = await generator();
        if(await evaluator(value)) {
            break;
        }
        await this.wait(ms);
    }
    return value;
}