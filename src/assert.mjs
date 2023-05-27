export function assert(value) {
    if (value === true) {
        return;
    }
    throw new Error('Assertion failed');
}