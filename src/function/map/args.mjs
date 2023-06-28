import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { file_js_map_args } from '../../file/js/map/args.mjs';
import { function_name_to_file_path } from '../name/to/file/path.mjs';
export async function function_map_args(function_name, mapper) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let file_path = function_name_to_file_path(function_name);
    await file_js_map_args(file_path, mapper);
    metadata([]);
}