import { comment } from '../../comment.mjs';
import { throws } from '../../throws.mjs';
export function comment_test_3() {
    throws(() => comment('test', 'extra argument'));
}