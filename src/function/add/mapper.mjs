import { js_expression_awaitify } from '../../js/expression/awaitify.mjs';
import { function_add_inputs } from './inputs.mjs';
import { function_input_add_type } from '../input/add/type.mjs';
import { function_map } from '../map.mjs';
import { function_name_get } from '../name/get.mjs';
import { js_code_call_expression_with_args } from '../../js/code/call/expression/with/args.mjs';
import { js_code_statement } from '../../js/code/statement.mjs';
import { function_add_with_statement_code } from './with/statement/code.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { comment } from '../../comment.mjs';
import { string_identifier_parts_from } from '../../string/identifier/parts/from.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { js_parse_expression } from '../../js/parse/expression.mjs';
export async function function_add_mapper(function_name_suffix) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let function_name = string_identifier_parts_from([
        'function',
        function_name_suffix
    ]);
    let function_name_refactor = string_identifier_parts_from([
        'refactor',
        function_name_suffix
    ]);
    let input = 'function_name';
    comment(` await function_map(function_name_get(refactor_asyncify), function_name_new);`);
    let expression_code = js_code_call_expression_with_args(function_name_get(function_map), [
        js_code_call_expression_with_args(function_name_get(function_name_get), [function_name_refactor]),
        input
    ]);
    let expression = js_parse_expression(expression_code);
    let awaited = js_expression_awaitify(expression);
    await function_add_with_statement_code(function_name, js_code_statement(awaited));
    await function_input_add_type(function_name, input, function_name_get(string_identifier_is));
    await function_add_inputs(function_name_refactor, 'args');
}