import { file_js_identifier_rename } from '../../file/js/identifier/rename.mjs';
import { function_name_to_file_path } from '../name/to/file/path.mjs';
import { string_prefix_replace } from '../../string/prefix/replace.mjs';
import { list_empty } from '../../list/empty.mjs';
import { function_tests_all } from './all.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { list_empty_not } from '../../list/empty/not.mjs';
import { function_copy } from '../copy.mjs';
export async function function_tests_copy(function_name_from, function_name_to) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result_from = await function_tests_all(function_name_from);
    assert(list_empty_not(result_from));
    let result_to = await function_tests_all(function_name_to);
    assert(list_empty(result_to));
    for (let r of result_from) {
        let r_mapped = string_prefix_replace(r, function_name_from, function_name_to);
        await function_copy(r, r_mapped);
        let file_path = function_name_to_file_path(r_mapped);
        await file_js_identifier_rename(file_path, function_name_from, function_name_to);
    }
    return {
        result_from,
        result_to
    };
}