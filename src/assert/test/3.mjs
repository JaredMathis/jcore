import { assert } from '../../assert.mjs';
import { throws } from '../../throws.mjs';
export function assert_test_3() {
    throws(() => assert(undefined));
}