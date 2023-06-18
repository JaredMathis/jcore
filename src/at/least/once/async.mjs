import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_is } from '../../../function/is.mjs';
export async function at_least_once_async(lambda) {
    arguments_assert(arguments, [function_is]);
    let result = false;
    await lambda(function v() {
        result = true;
    });
    return result;
}