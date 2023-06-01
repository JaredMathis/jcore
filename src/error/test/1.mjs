import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { error } from '../../error.mjs';
import { throws } from '../../throws.mjs';
export function error_test_1() {
    arguments_assert(arguments, []);
    throws(() => error());
    metadata([]);
}