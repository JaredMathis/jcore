import { integer_value_0 } from '../../../../integer/value/0.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_set } from '../../../set.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_set_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = 'b';
    let actual = string_set('a', integer_value_0(), 'b');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}