import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { integer_divide_evenly } from '../../../evenly.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function integer_divide_evenly_test_generated_5() {
    arguments_assert(arguments, []);
    let expected = 1;
    let actual = integer_divide_evenly(-1, -1);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}