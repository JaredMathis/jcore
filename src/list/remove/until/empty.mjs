import { list_remove_multiple } from '../multiple.mjs';
import { assert } from '../../../assert.mjs';
import { list_empty } from '../../empty.mjs';
import { comment } from '../../../comment.mjs';
export function list_remove_until_empty(remaining, removals_get) {
    while (!list_empty(remaining)) {
        let removals = removals_get();
        comment(`This ensures no infinte loops - we make progress each time`);
        assert(!list_empty(removals));
        list_remove_multiple(remaining, removals);
    }
}