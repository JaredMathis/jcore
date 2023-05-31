import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { throws } from '../../throws.mjs';
export function assert_test_4() {
    throws(() => assert());
    metadata([]);
}