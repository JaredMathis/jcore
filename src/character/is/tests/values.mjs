import { string_a } from '../../../string/a.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function character_is_tests_values() {
    let v = [];
    arguments_assert(arguments, v);
    return [
        string_a(),
        `b`
    ];
}