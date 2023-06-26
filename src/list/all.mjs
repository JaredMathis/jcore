import { boolean_value_true } from '../boolean/value/true.mjs';
import { boolean_value_false } from '../boolean/value/false.mjs';
import { metadata } from '../metadata.mjs';
import { not } from '../not.mjs';
import { function_is } from '../function/is.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function list_all(list, predicate) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    for (let a of list) {
        let v_2 = predicate(a);
        let v = not(v_2);
        if (v) {
            let v_3 = boolean_value_false();
            return v_3;
        }
    }
    let v_4 = boolean_value_true();
    return v_4;
    metadata([]);
}