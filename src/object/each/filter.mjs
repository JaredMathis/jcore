import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_add } from '../../list/add.mjs';
import { object_each } from '../each.mjs';
import { function_is } from '../../function/is.mjs';
export function object_each_filter(object, predicate) {
    arguments_assert(arguments, [
        defined_is,
        function_is
    ]);
    let result = [];
    let lambda = (value, key) => {
        if (predicate(value, key)) {
            list_add(result, key);
        }
    };
    object_each(object, lambda);
    return result;
    metadata([]);
}