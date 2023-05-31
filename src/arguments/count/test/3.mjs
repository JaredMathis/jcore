import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { arguments_count } from '../../count.mjs';
export function arguments_count_test_3() {
    comment(`no error`);
    arguments_count([], 0);
    metadata([]);
}