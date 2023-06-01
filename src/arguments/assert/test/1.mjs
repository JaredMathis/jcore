import { metadata } from '../../../metadata.mjs';
import { integer_is } from '../../../integer/is.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_test_1() {
    arguments_assert(arguments, []);
    arguments_assert([
        1,
        2,
        3
    ], [
        integer_is,
        integer_is,
        integer_is
    ]);
    metadata([]);
}