import { integer_value_0 } from '../../../../../integer/value/0.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_remove_at } from '../../../at.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_remove_at_test_generated_8() {
    arguments_assert(arguments, []);
    let expected = 'a';
    let actual = string_remove_at('aa', integer_value_0());
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}