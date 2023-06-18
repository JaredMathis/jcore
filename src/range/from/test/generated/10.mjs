import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { range_from } from '../../../from.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function range_from_test_generated_10() {
    arguments_assert(arguments, []);
    let expected = [
        0,
        1,
        2
    ];
    let actual = range_from(0, 2);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}