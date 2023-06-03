import { json_equals_keys_without } from './equals/keys/without.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function json_equals(a, b) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return json_equals_keys_without(a, b);
}