import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_equal_except_1 } from '../../../1.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export function string_equal_except_1_test_generated_5() {
    arguments_assert(arguments, []);
    let expected = false;
    let actual = string_equal_except_1('', 'aa');
    assert(json_equal(actual, expected));
}