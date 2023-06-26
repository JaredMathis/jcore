import { js_code_call_expression_with_args } from '../js/code/call/expression/with/args.mjs';
import { js_code_expression_string } from '../js/code/expression/string.mjs';
import { metadata_tests_none } from '../metadata/tests/none.mjs';
import { js_mapper_args_to_metadata_args_contains } from '../js/mapper/args/to/metadata/args/contains.mjs';
import { function_map_args } from '../function/map/args.mjs';
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
import { list_adder_async } from '../list/adder/async.mjs';
import { string_combine } from '../string/combine.mjs';
import { string_to } from '../string/to.mjs';
export async function tests_generate() {
    arguments_assert(arguments, []);
    let function_name = tests_name();
    let file_path = function_name_to_file_path(function_name);
    let test_names = await function_all_tests();
    let filtered = await list_adder_async(async function v_7(la) {
        for (let test_name of test_names) {
            await function_map_args(test_name, async function v_8(args) {
                let v_5 = await js_mapper_args_to_metadata_args_contains(args, metadata_tests_none);
                if (v_5) {
                    return;
                }
                la(test_name);
            });
        }
    });
    let mapped = list_map(filtered, function v_4(n) {
        const awaited = js_code_call_expression_statement(n);
        let v = js_code_await(awaited);
        return v;
    });
    const combine_args = [
        string_to(list_length(mapped)),
        ` tests ran successfully`
    ];
    let combine_args_mapped = list_map(combine_args, js_code_expression_string);
    let log_args = js_code_call_expression_with_args(function_name_get(string_combine), combine_args_mapped);
    list_add(mapped, js_code_call_expression_with_args(function_name_get(log), log_args));
    let v_2 = string_new_line();
    let code = list_join(mapped, v_2);
    let statements = js_parse_statements(code);
    let v_6 = await file_exists(file_path);
    if (v_6) {
        await file_delete(file_path);
    }
    let is_async = true;
    await function_add_with_statements_synchronized(function_name, statements, is_async);
    let v_3 = function_name_get(refactor_import_fix);
    await function_map(v_3, function_name);
    metadata([]);
}