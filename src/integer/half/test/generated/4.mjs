import { integer_value_0 } from '../../../value/0.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { integer_half } from '../../../half.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function integer_half_test_generated_4() {
    arguments_assert(arguments, []);
    let expected = integer_value_0();
    let actual = integer_half(integer_value_0());
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}