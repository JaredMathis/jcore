import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { add_1 } from '../../1.mjs';
import { equal } from '../../../equal.mjs';
import { assert } from '../../../assert.mjs';
export function add_1_test_2() {
    arguments_assert(arguments, []);
    assert(equal(add_1(2), 3));
    metadata([]);
}