import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_each } from '../each.mjs';
import { function_is } from '../../function/is.mjs';
import { list_new_then } from '../../list/new/then.mjs';
export function object_each_filter(object, predicate) {
    arguments_assert(arguments, [
        defined_is,
        function_is
    ]);
    let result = list_new_then(list_new_then_add => {
        let lambda = (value, key) => {
            if (predicate(value, key)) {
                list_new_then_add(key);
            }
        };
        object_each(object, lambda);
    });
    return result;
    metadata([]);
}