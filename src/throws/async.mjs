import { function_is } from '../function/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function throws_async(lambda) {
    arguments_assert(arguments, [function_is]);
    let errored = false;
    try {
        await lambda();
    } catch (e) {
        errored = true;
    }
    return errored;
}