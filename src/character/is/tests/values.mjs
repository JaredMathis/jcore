import { metadata } from '../../../metadata.mjs';
import { string_a } from '../../../string/a.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function character_is_tests_values() {
    arguments_assert(arguments, []);
    let v = string_a();
    return [
        v,
        `b`
    ];
    metadata([]);
}