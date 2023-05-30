import { throws } from '../../../throws.mjs';
import { arguments_count } from '../../count.mjs';
export function arguments_count_test_5() {
    throws(() => arguments_count([
        1,
        2
    ], 1));
}