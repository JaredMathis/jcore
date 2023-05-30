import { comment } from '../../../comment.mjs';
import { arguments_count } from '../../count.mjs';
export function arguments_count_test_1() {
    comment(`no error`);
    arguments_count([
        1,
        2
    ], 2);
}