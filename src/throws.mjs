import { arguments_assert } from './arguments/assert.mjs';
import { function_is } from './function/is.mjs';
export function throws(lambda) {
    arguments_assert(arguments, [function_is]);
    let errored = false;
    try {
        lambda();
    } catch (e) {
        errored = true;
    }
    return errored;
}