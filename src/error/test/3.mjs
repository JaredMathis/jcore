import { metadata } from '../../metadata.mjs';
import { error } from '../../error.mjs';
import { throws } from '../../throws.mjs';
export function error_test_3() {
    throws(() => error('message', 'second argument'));
    metadata([]);
}