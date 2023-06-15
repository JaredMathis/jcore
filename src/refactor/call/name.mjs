import { js_function_declaration_to_statement_after_arguments_assert } from '../../js/function/declaration/to/statement/after/arguments/assert.mjs';
import { refactor_import_fix } from '../import/fix.mjs';
import { js_call_expression_name_change } from '../../js/call/expression/name/change.mjs';
import { js_statement_expression_to_expression } from '../../js/statement/expression/to/expression.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function refactor_call_name(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {name_new} = args;
    let {function_declaration} = args;
    let statement_after = await js_function_declaration_to_statement_after_arguments_assert(function_declaration);
    let expression = js_statement_expression_to_expression(statement_after);
    js_call_expression_name_change(expression, name_new);
    await refactor_import_fix(args);
}