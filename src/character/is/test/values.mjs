import { string_a } from '../../../string/a.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function character_is_test_values() {
    arguments_assert(arguments, []);
    return [
        string_a(),
        `b`
    ];
}