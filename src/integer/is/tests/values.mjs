import { arguments_assert } from '../../../arguments/assert.mjs';
export function integer_is_tests_values() {
    arguments_assert(arguments, []);
    return [
        -2,
        -1,
        0,
        1,
        2,
        3
    ];
}