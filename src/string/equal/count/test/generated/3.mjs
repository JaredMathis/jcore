import { integer_value_1 } from '../../../../../integer/value/1.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_equal_count } from '../../../count.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_equal_count_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = integer_value_1();
    let actual = string_equal_count('a', 'aa');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}