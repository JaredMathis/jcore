import { not } from '../../../not.mjs';
import { list_remove_multiple } from '../multiple.mjs';
import { assert } from '../../../assert.mjs';
import { list_empty } from '../../empty.mjs';
import { comment } from '../../../comment.mjs';
export function list_remove_until_empty(remaining, removals_get) {
    while (not(list_empty(remaining))) {
        let removals = removals_get();
        comment(`This ensures no infinte loops - we make progress each time`);
        let v_2 = list_empty(removals);
        let v = not(v_2);
        assert(v);
        list_remove_multiple(remaining, removals);
    }
}