import { database_property_value } from './property/value.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function database_value(commit_files) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return { [database_property_value()]: commit_files };
}