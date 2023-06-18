import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { number_zero_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function integer_zero_is_test_generated_5() {
    arguments_assert(arguments, []);
    let expected = true;
    let actual = number_zero_is(0);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}