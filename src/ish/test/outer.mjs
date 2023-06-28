import { metadata } from '../../metadata.mjs';
import { ish_greet } from '../greet.mjs';
import { aa_ish_test } from '../../aa/ish/test.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function ish_test_outer() {
    arguments_assert(arguments, []);
    ish_greet(123);
    return aa_ish_test('jared', ish_greet);
    metadata([]);
}