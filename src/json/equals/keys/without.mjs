import { object_map_without } from '../../../object/map/without.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { json_to } from '../../to.mjs';
import { equal_by } from '../../../equal/by.mjs';
export function json_equals_keys_without(a, b, values_without) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    let filtered_a = object_map_without(a, values_without);
    let filtered_b = object_map_without(b, values_without);
    return equal_by(json_to, filtered_a, filtered_b);
}