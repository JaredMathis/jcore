import { assert } from '../../assert.mjs';
import { throws } from '../../throws.mjs';
export function assert_test_5() {
    throws(() => assert(true, true));
}