import { function_input_add_type } from '../input/add/type.mjs';
import { function_map } from '../map.mjs';
import { function_name_get } from '../name/get.mjs';
import { js_code_call_expression_with_args } from '../../js/code/call/expression/with/args.mjs';
import { js_call_expression_awaitify } from '../../js/call/expression/awaitify.mjs';
import { js_code_statement } from '../../js/code/statement.mjs';
import { function_add_with_statement } from './with/statement.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { error } from '../../error.mjs';
import { comment } from '../../comment.mjs';
import { string_identifier_parts_from } from '../../string/identifier/parts/from.mjs';
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
    let expression = error();
    comment(` await function_map(function_name_get(refactor_asyncify), function_name_new);`);
    js_code_call_expression_with_args(function_name_get(function_map), [
        js_code_call_expression_with_args(function_name_get(function_name_get), [function_name_refactor]),
        input
    ]);
    await function_add_with_statement(function_name, js_code_statement(js_call_expression_awaitify(expression)));
    await function_input_add_type(function_name, input);
}