import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_add } from '../../list/add.mjs';
import { object_each } from '../each.mjs';
export function object_each_filter(object, predicate) {
    arguments_assert(arguments, [
        tautology,
        tautology
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