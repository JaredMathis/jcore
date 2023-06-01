import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_code_call_expression_statement } from '../../js/code/call/expression/statement.mjs';
import { log } from '../../log.mjs';
import { function_name_get } from '../name/get.mjs';
import { refactor_import_fix } from '../../refactor/import/fix.mjs';
import { function_map } from '../map.mjs';
import { function_add_with_statements_synchronized } from '../add/with/statements/synchronized.mjs';
import { file_delete } from '../../file/delete.mjs';
import { file_exists } from '../../file/exists.mjs';
import { js_parse_statements } from '../../js/parse/statements.mjs';
import { string_new_line } from '../../string/new/line.mjs';
import { list_join } from '../../list/join.mjs';
import { list_map } from '../../list/map.mjs';
import { function_all_tests } from '../all/tests.mjs';
import { function_name_to_path } from '../name/to/path.mjs';
import { list_add } from '../../list/add.mjs';
import { list_length } from '../../list/length.mjs';
export async function function_tests_generate() {
    arguments_assert(arguments, []);
    let function_name = 'tests';
    let file_path = function_name_to_path(function_name);
    let test_names = await function_all_tests();
    let mapped = list_map(test_names, n => `await ${ js_code_call_expression_statement(n) }`);
    list_add(mapped, `${ function_name_get(log) }(${ list_length(mapped) } + ' tests ran successfully')`);
    let code = list_join(mapped, string_new_line());
    let statements = js_parse_statements(code);
    if (await file_exists(file_path)) {
        await file_delete(file_path);
    }
    let is_async = true;
    await function_add_with_statements_synchronized(function_name, statements, is_async);
    await function_map(function_name_get(refactor_import_fix), function_name);
    metadata([]);
}