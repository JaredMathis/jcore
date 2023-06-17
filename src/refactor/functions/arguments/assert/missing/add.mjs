import { refactor_functions_arguments_assert_missing_add_excludes } from './add/excludes.mjs';
import { refactor_arguments_assert_add_no_check } from '../../../../arguments/assert/add/no/check.mjs';
import { js_node_call_expression_statement_if_name_equal } from '../../../../../js/node/call/expression/statement/if/name/equal.mjs';
import { file_js_all_map_args_if_function } from '../../../../../file/js/all/map/args/if/function.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { list_empty } from '../../../../../list/empty.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_function_declaration_to_statements } from '../../../../../js/function/declaration/to/statements.mjs';
import { list_first } from '../../../../../list/first.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { refactor_import_fix } from '../../../../import/fix.mjs';
export async function refactor_functions_arguments_assert_missing_add() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function(async function logic(args) {
        let {function_declaration} = args;
        let exists = false;
        let statements = js_function_declaration_to_statements(function_declaration);
        if (!list_empty(statements)) {
            let statement_first = list_first(statements);
            js_node_call_expression_statement_if_name_equal(statement_first, function_name_get(arguments_assert), function on_name_equal() {
                exists = true;
            });
        }
        if (!exists) {
            let excludes = await refactor_functions_arguments_assert_missing_add_excludes();
            refactor_arguments_assert_add_no_check(function_declaration, excludes);
            await refactor_import_fix(args);
        }
    });
    metadata([]);
}