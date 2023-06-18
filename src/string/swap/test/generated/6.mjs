import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_swap } from '../../../swap.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_swap_test_generated_6() {
    arguments_assert(arguments, []);
    let expected = 'aba';
    let actual = string_swap('aab', 1, 2);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}