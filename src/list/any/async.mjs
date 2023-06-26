import { boolean_value_false } from '../../boolean/value/false.mjs';
import { boolean_value_true } from '../../boolean/value/true.mjs';
import { metadata } from '../../metadata.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function list_any_async(list, predicate) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    for (let a of list) {
        let v = await predicate(a);
        if (v) {
            let v_2 = boolean_value_true();
            return v_2;
        }
    }
    let v_3 = boolean_value_false();
    return v_3;
    metadata([]);
}