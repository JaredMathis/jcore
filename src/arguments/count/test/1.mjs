import { arguments_assert } from '../../assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { arguments_count } from '../../count.mjs';
export function arguments_count_test_1() {
    arguments_assert(arguments, []);
    comment(`no error`);
    arguments_count([
        1,
        2
    ], 2);
    metadata([]);
}