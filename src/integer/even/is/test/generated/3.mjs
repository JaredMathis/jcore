import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { integer_even_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function integer_even_is_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = false;
    let actual = integer_even_is(-1);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}