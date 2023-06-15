import { refactor_import_fix } from '../import/fix.mjs';
import { js_call_expression_name_change } from '../../js/call/expression/name/change.mjs';
import { js_function_declaration_to_expression_after_arguments_assert } from '../../js/function/declaration/to/expression/after/arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { list_length_is_0 } from '../../list/length/is/0.mjs';
import { list_map } from '../../list/map.mjs';
import { js_parse_expression } from '../../js/parse/expression.mjs';
import { list_add_multiple } from '../../list/add/multiple.mjs';
export async function refactor_call_inputs(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration} = args;
    let expression = await js_function_declaration_to_expression_after_arguments_assert(function_declaration);
    let args = js_call_expression_arguments(expression);
    assert(list_length_is_0(args));
    let name = js_call_expression_name_get_or_null(expression);
    let inputs = function_inputs(name);
    let mapped = list_map(inputs, js_parse_expression);
    list_add_multiple(args, mapped);
    await refactor_import_fix(args);
}