import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_add_multiple } from './add/multiple.mjs';
import { list_clear } from './clear.mjs';
export function list_replace(list_to_replace, list_to_replace_with) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    list_clear(list_to_replace);
    list_add_multiple(list_to_replace, list_to_replace_with);
    metadata([]);
}