import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { add_1 } from '../../1.mjs';
import { equal } from '../../../equal.mjs';
import { assert } from '../../../assert.mjs';
export function add_1_test_6() {
    arguments_assert(arguments, []);
    assert(equal(add_1(-3), -2));
    metadata([
        1,
        1,
        2,
        3
    ]);
}