import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_equal_except_1 } from '../../../1.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export function string_equal_except_1_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = false;
    let actual = string_equal_except_1('a', 'a');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}