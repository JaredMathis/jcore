import { boolean_value_true } from '../boolean/value/true.mjs';
import { boolean_value_false } from '../boolean/value/false.mjs';
import { metadata } from '../metadata.mjs';
import { and } from '../and.mjs';
import { list_empty } from './empty.mjs';
import { function_is } from '../function/is.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_first_remove } from './first/remove.mjs';
export function list_consume(list, lambda) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let exceeded = boolean_value_false();
    let v_4 = function v_3() {
        let v_2 = list_empty(list);
        if (v_2) {
            exceeded = boolean_value_true();
            return null;
        } else {
            let v = list_first_remove(list);
            return v;
        }
    };
    lambda(v_4);
    let v_5 = !exceeded;
    let v_6 = list_empty(list);
    let v_7 = and(v_5, v_6);
    return v_7;
    metadata([]);
}