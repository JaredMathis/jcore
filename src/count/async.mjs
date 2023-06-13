import { arguments_assert } from '../arguments/assert.mjs';
import { function_is } from '../function/is.mjs';
export async function count_async(then) {
    arguments_assert(arguments, [function_is]);
    let result = 0;
    await then(counter);
    function counter() {
        result++;
    }
    return result;
}