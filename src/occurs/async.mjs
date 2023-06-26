import { arguments_assert } from '../arguments/assert.mjs';
import { function_is } from '../function/is.mjs';
export async function occurs_async(lambda) {
    arguments_assert(arguments, [function_is]);
    let result = false;
    let v_2 = function v() {
        result = true;
    };
    await lambda(v_2);
    return result;
}