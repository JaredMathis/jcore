import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { integer_divide } from '../../../divide.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function integer_divide_test_generated_4() {
    arguments_assert(arguments, []);
    let expected = -0.3333333333333333;
    let actual = integer_divide(-1, 3);
    assert(json_equal(actual, expected));
}