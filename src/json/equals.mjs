import { json_equals_keys_excluded } from './equals/keys/excluded.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function json_equals(a, b) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return json_equals_keys_excluded(a, b);
}