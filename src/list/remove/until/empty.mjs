import { function_is } from '../../../function/is.mjs';
import { metadata } from '../../../metadata.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_empty_not } from '../../empty/not.mjs';
import { list_remove_multiple } from '../multiple.mjs';
import { assert } from '../../../assert.mjs';
import { comment } from '../../../comment.mjs';
export function list_remove_until_empty(remaining, removals_get) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    while (list_empty_not(remaining)) {
        let removals = removals_get();
        comment(`This ensures no infinte loops - we make progress each time`);
        let v = list_empty_not(removals);
        assert(v);
        list_remove_multiple(remaining, removals);
    }
    metadata([]);
}