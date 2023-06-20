import { refactor_import_fix } from '../../import/fix.mjs';
import { js_function_declaration_statement_add_after_arguments_assert } from '../../../js/function/declaration/statement/add/after/arguments/assert.mjs';
import { js_code_call_expression_statement } from '../../../js/code/call/expression/statement.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { error } from '../../../error.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_parse_statement } from '../../../js/parse/statement.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
export async function refactor_first_call_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration} = args;
    let v = function_name_get(error);
    let statement_code = js_code_call_expression_statement(v);
    let statement = js_parse_statement(statement_code);
    await js_function_declaration_statement_add_after_arguments_assert(function_declaration, statement);
    await refactor_import_fix(args);
}