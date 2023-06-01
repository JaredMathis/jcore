import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { integer_is } from '../../../integer/is.mjs';
import { throws } from '../../../throws.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_test_3() {
    arguments_assert(arguments, []);
    comment('Too many predicates');
    throws(() => arguments_assert([1], [
        integer_is,
        integer_is
    ]));
    metadata([]);
}