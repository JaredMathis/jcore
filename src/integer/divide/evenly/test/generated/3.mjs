import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { integer_divide_evenly } from '../../../evenly.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function integer_divide_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = -1;
    let actual = integer_divide_evenly(2, -2);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}