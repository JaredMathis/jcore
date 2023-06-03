import { log } from '../../../log.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { json_to } from '../../to.mjs';
import { equal_by } from '../../../equal/by.mjs';
import { object_keys_without } from '../../../object/keys/without.mjs';
import { object_merge_filtered } from '../../../object/merge/filtered.mjs';
import { list_contains } from '../../../list/contains.mjs';
export function json_equals_keys_without(a, b, values_without) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    let filtered_a = object_map_without(a, values_without);
    let filtered_b = object_map_without(b, values_without);
    console.log({
        filtered_a,
        filtered_b
    });
    return equal_by(json_to, filtered_a, filtered_b);
}

function object_map_without(object, values_without) {
    return object_merge_filtered(object, key => !list_contains(values_without, key), {});
}
