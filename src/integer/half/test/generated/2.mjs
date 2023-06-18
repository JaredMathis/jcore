import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { integer_half } from '../../../half.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function integer_half_test_generated_2() {
    arguments_assert(arguments, []);
    let expected = 0;
    let actual = integer_half(0);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}