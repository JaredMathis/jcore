import { arguments_assert } from '../../assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { throws } from '../../../throws.mjs';
import { arguments_count } from '../../count.mjs';
export function arguments_count_test_4() {
    arguments_assert(arguments, []);
    throws(() => arguments_count([
        1,
        2
    ], 3));
    metadata([]);
}