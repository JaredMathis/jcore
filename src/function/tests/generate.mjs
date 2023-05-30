import { file_delete } from '../../file/delete.mjs';
import { file_exists } from '../../file/exists.mjs';
import { js_parse_statements } from '../../js/parse/statements.mjs';
import { file_js_map } from '../../file/js/map.mjs';
import { refactor_console_to_function } from '../../refactor/console/to/function.mjs';
import { string_new_line } from '../../string/new/line.mjs';
import { list_join } from '../../list/join.mjs';
import { list_map } from '../../list/map.mjs';
import { function_all_tests } from '../all/tests.mjs';
import { function_name_to_path } from '../name/to/path.mjs';
import { function_add_with_statements } from '../add/with/statements.mjs';
export async function function_tests_generate() {
    let function_name = 'tests';
    let file_path = function_name_to_path(function_name);
    let test_names = await function_all_tests();
    let mapped = list_map(test_names, n => `await ${ n }();`);
    let code = list_join(mapped, string_new_line());
    let statements = js_parse_statements(code);
    if (await file_exists(file_path)) {
        await file_delete(file_path);
    }
    await function_add_with_statements(function_name, statements);
    await file_js_map(refactor_console_to_function.name, file_path);
}