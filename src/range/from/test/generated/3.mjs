import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { range_from } from '../../../from.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function range_from_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = [1];
    let actual = range_from(1, 1);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}