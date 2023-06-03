import { equal_not } from '../../equal/not.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_filter } from '../../list/filter.mjs';
import { object_properties } from '../properties.mjs';
export function object_keys_without(value, excluded) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let all = object_properties(value);
    let filtered = list_filter(all, v => equal_not(v, excluded));
    return filtered;
}