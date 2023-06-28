import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { function_name_to_file_path } from '../../../to/file/path.mjs';
import { list_string_to_dictionary } from '../../../../../list/string/to/dictionary.mjs';
export function function_name_list_to_file_path(result) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = list_string_to_dictionary(result, function_name_to_file_path);
    return v;
    metadata([]);
}