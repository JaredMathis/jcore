import { function_naming_suffix_async } from './naming/suffix/async.mjs';
import { string_add } from '../string/add.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function function_asyncify(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let function_name_new = string_add(function_name, function_naming_suffix_async());
}