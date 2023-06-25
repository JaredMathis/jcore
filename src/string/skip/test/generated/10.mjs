import { integer_value_3 } from '../../../../integer/value/3.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_skip } from '../../../skip.mjs';
export function string_skip_test_generated_10() {
    arguments_assert(arguments, []);
    let expected = '';
    let actual = string_skip('aab', integer_value_3());
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}