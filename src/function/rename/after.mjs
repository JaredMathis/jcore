import { tests_generate } from '../../tests/generate.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { refactor_import_fix } from '../../refactor/import/fix.mjs';
import { function_name_get } from '../name/get.mjs';
import { file_js_multiple_map } from '../../file/js/multiple/map.mjs';
export async function function_rename_after(file_paths_changed) {
    arguments_assert(arguments, [arguments_assert_todo]);
    await file_js_multiple_map(function_name_get(refactor_import_fix), file_paths_changed);
    await tests_generate();
}