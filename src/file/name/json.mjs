import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { file_extension_json } from '../extension/json.mjs';
export function file_name_json(file_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return `${ file_name }${ file_extension_json() }`;
}