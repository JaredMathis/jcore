import { function_auto_no_add } from '../../../auto/no/add.mjs';
import { function_map_multiple } from '../../../map/multiple.mjs';
import { refactor_metadata_generated_add_function } from '../../../../refactor/metadata/generated/add/function.mjs';
import { function_add_with_statements_synchronized } from '../../../add/with/statements/synchronized.mjs';
import { js_parse_statement } from '../../../../js/parse/statement.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { js_code_statement_assignment } from '../../../../js/code/statement/assignment.mjs';
import { error } from '../../../../error.mjs';
import { log } from '../../../../log.mjs';
import { assert } from '../../../../assert.mjs';
import { js_code_call_expression_statement_with_args_code } from '../../../../js/code/call/expression/statement/with/args/code.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { js_code_call_expression_with_args_code } from '../../../../js/code/call/expression/with/args/code.mjs';
import { js_code_call_expression_with_args } from '../../../../js/code/call/expression/with/args.mjs';
import { json_to } from '../../../../json/to.mjs';
import { list_map } from '../../../../list/map.mjs';
import { function_run } from '../../../run.mjs';
export async function function_tests_generate_generic_each(function_name, test_name, args, on_has_error) {
    let expected;
    let has_error = false;
    try {
        expected = await function_run(function_name, args);
    } catch (e) {
        has_error = true;
    }
    if (has_error) {
        if (on_has_error()) {
            return;
        }
    }
    let args_code = list_map(args, json_to);
    let ce_function = js_code_call_expression_with_args(function_name, args_code);
    let statements_code;
    let statement_assert;
    if (has_error) {
        let v = function_name_get(assert_throws);
        let ce_throws = js_code_call_expression_with_args_code(v, `() => ${ ce_function }`);
        let v_2 = function_name_get(assert);
        statement_assert = js_code_call_expression_statement_with_args_code(v_2, ce_throws);
        statements_code = [statement_assert];
        log({
            args,
            error: true
        });
    } else {
        let identifier_expected = 'expected';
        let v_3 = json_to(expected);
        let statement_expected = js_code_statement_assignment(identifier_expected, v_3);
        let identifier_actual = 'actual';
        let statement_function = js_code_statement_assignment(identifier_actual, ce_function);
        let v_4 = function_name_get(json_equal);
        let ce_equal = js_code_call_expression_with_args(v_4, [
            identifier_actual,
            identifier_expected
        ]);
        let v_5 = function_name_get(assert);
        statement_assert = js_code_call_expression_statement_with_args_code(v_5, ce_equal);
        statements_code = [
            statement_expected,
            statement_function,
            statement_assert
        ];
        log({
            args,
            expected
        });
    }
    let statements = list_map(statements_code, js_parse_statement);
    await function_add_with_statements_synchronized(test_name, statements, false);
    let refactors = [refactor_metadata_generated_add_function];
    let names = list_map(refactors, function_name_get);
    await function_map_multiple(names, test_name);
    await function_auto_no_add(test_name);
}