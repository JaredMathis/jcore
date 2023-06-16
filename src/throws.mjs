export function throws(lambda) {
    let errored = false;
    try {
        lambda();
    } catch (e) {
        errored = true;
    }
    return errored;
}