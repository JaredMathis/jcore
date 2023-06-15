import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { range_from } from '../../../from.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function range_from_test_generated_4() {
    arguments_assert(arguments, []);
    let expected = [
        -2,
        -1,
        0,
        1
    ];
    let actual = range_from(-2, 1);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}