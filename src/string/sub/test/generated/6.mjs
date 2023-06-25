import { integer_value_2 } from '../../../../integer/value/2.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_sub } from '../../../sub.mjs';
export function string_sub_test_generated_6() {
    arguments_assert(arguments, []);
    let expected = '';
    let actual = string_sub('aa', integer_value_2(), integer_value_2());
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}