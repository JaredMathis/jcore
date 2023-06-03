import { log } from '../../../log.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { json_to } from '../../to.mjs';
import { equal_by } from '../../../equal/by.mjs';
import { object_keys_without } from '../../../object/keys/without.mjs';
export function json_equals_keys_excluded(a, b, filter) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    let filtered_a = object_keys_without(a, filter);
    let filtered_b = object_keys_without(b, filter);
    console.log({
        filtered_a,
        filtered_b
    });
    return equal_by(json_to, filtered_a, filtered_b);
}