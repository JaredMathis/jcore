import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { throws } from '../../throws.mjs';
export function assert_test_5() {
    arguments_assert(arguments, []);
    throws(() => assert(true, true));
    metadata([]);
}