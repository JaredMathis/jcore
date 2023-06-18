import { tests_name } from './name.mjs';
import { js_code_await } from '../js/code/await.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { js_code_call_expression_statement } from '../js/code/call/expression/statement.mjs';
import { log } from '../log.mjs';
import { function_name_get } from '../function/name/get.mjs';
import { refactor_import_fix } from '../refactor/import/fix.mjs';
import { function_map } from '../function/map.mjs';
import { function_add_with_statements_synchronized } from '../function/add/with/statements/synchronized.mjs';
import { file_delete } from '../file/delete.mjs';
import { file_exists } from '../file/exists.mjs';
import { js_parse_statements } from '../js/parse/statements.mjs';
import { string_new_line } from '../string/new/line.mjs';
import { list_join } from '../list/join.mjs';
import { list_map } from '../list/map.mjs';
import { function_all_tests } from '../function/all/tests.mjs';
import { function_name_to_file_path } from '../function/name/to/file/path.mjs';
import { list_add } from '../list/add.mjs';
import { list_length } from '../list/length.mjs';
export async function tests_generate() {
    arguments_assert(arguments, []);
    let function_name = tests_name();
    let file_path = function_name_to_file_path(function_name);
    let test_names = await function_all_tests();
    let mapped = list_map(test_names, n => {
        const awaited = js_code_call_expression_statement(n);
        let v = js_code_await(awaited);
        return v;
    });
    list_add(mapped, `${ function_name_get(log) }(${ list_length(mapped) } + ' tests ran successfully')`);
    let v_2 = string_new_line();
    let code = list_join(mapped, v_2);
    let statements = js_parse_statements(code);
    if (await file_exists(file_path)) {
        await file_delete(file_path);
    }
    let is_async = true;
    await function_add_with_statements_synchronized(function_name, statements, is_async);
    let v_3 = function_name_get(refactor_import_fix);
    await function_map(v_3, function_name);
    metadata([]);
}