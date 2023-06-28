import { ish_greet } from '../greet.mjs';
import { ish_test } from '../test.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function ish_test_outer() {
    arguments_assert(arguments, []);
    ish_greet(123);

    return ish_test('jared', ish_greet);
}