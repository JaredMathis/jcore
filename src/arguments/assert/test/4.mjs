import { comment } from '../../../comment.mjs';
import { number_is } from '../../../number/is.mjs';
import { throws } from '../../../throws.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_test_4() {
    comment('wrong type (string is not a number)');
    throws(() => arguments_assert([`1`], [number_is]));
}