import { list_remove_multiple } from '../multiple.mjs';
import { assert } from '../../../assert.mjs';
import { list_length_is_0 } from '../../length/is/0.mjs';
export function list_remove_until_empty(remaining, removals_get) {
    while (!list_length_is_0(remaining)) {
        let removals = removals_get();
        assert(!list_length_is_0(removals));
        list_remove_multiple(remaining, removals);
    }
}