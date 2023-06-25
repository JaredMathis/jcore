import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_keys_each } from '../each.mjs';
import { function_is } from '../../../function/is.mjs';
import { list_adder } from '../../../list/adder.mjs';
export function object_keys_each_filter(object, predicate) {
    arguments_assert(arguments, [
        defined_is,
        function_is
    ]);
    let result = list_adder(function v(list_new_then_add) {
        let lambda = function v_2(value, key) {
            let v_3 = predicate(value, key);
            if (v_3) {
                list_new_then_add(key);
            }
        };
        object_keys_each(object, lambda);
    });
    return result;
    metadata([]);
}