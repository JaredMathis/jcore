import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { integer_divide_evenly } from '../../../evenly.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function integer_divide_evenly_test_generated_2() {
    arguments_assert(arguments, []);
    let expected = 2;
    let actual = integer_divide_evenly(-2, -1);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}