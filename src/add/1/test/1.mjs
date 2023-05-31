import { metadata } from '../../../metadata.mjs';
import { equal } from '../../../equal.mjs';
import { assert } from '../../../assert.mjs';
import { add_1 } from '../../1.mjs';
export function add_1_test_1() {
    assert(equal(add_1(1), 2));
    metadata([]);
    metadata([]);
}