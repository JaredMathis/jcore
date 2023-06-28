import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { function_map } from '../map.mjs';
export async function function_map_multiple(refactors_names, function_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    for (let n of refactors_names) {
        await function_map(n, function_name);
    }
    metadata([]);
}