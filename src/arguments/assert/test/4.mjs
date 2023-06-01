import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { integer_is } from '../../../integer/is.mjs';
import { throws } from '../../../throws.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_test_4() {
    arguments_assert(arguments, []);
    comment('wrong type (string is not a number)');
    throws(() => arguments_assert([`1`], [integer_is]));
    metadata([]);
}