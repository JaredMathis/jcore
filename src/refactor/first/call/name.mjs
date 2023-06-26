import { js_function_declaration_to_expression_after_arguments_assert } from '../../../js/function/declaration/to/expression/after/arguments/assert.mjs';
import { refactor_import_fix } from '../../import/fix.mjs';
import { js_call_expression_name_change } from '../../../js/call/expression/name/change.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function refactor_first_call_name(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {name_new} = args;
    let {function_declaration} = args;
    let expression = await js_function_declaration_to_expression_after_arguments_assert(function_declaration);
    js_call_expression_name_change(expression, name_new);
    await refactor_import_fix(args);
    metadata([]);
}