import { comment } from '../../../comment.mjs';
import { number_is } from '../../../number/is.mjs';
import { throws } from '../../../throws.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_test_2() {
    comment('Too few predicates');
    throws(() => arguments_assert([
        1,
        2,
        3
    ], [
        number_is,
        number_is
    ]));
}