import { boolean_value_true } from '../boolean/value/true.mjs';
import { boolean_value_false } from '../boolean/value/false.mjs';
import { metadata } from '../metadata.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_is } from '../function/is.mjs';
export async function occurs_async(lambda) {
    arguments_assert(arguments, [function_is]);
    let result = boolean_value_false();
    let v_2 = function v() {
        result = boolean_value_true();
    };
    await lambda(v_2);
    return result;
    metadata([]);
}