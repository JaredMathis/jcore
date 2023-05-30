import { error } from '../../error.mjs';
import { throws } from '../../throws.mjs';
export function error_test_2() {
    throws(() => error('message'));
}