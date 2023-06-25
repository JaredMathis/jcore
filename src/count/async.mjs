import { integer_value_0 } from '../integer/value/0.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_is } from '../function/is.mjs';
export async function count_async(then) {
    arguments_assert(arguments, [function_is]);
    let result = integer_value_0();
    await then(counter);
    function counter() {
        result++;
    }
    return result;
}