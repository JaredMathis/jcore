import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_parse_expression } from '../../parse/expression.mjs';
import { js_code_function_named } from '../../code/function/named.mjs';
export function js_function_declaration_named(name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let function_code = js_code_function_named(name);
    let function_expression = js_parse_expression(function_code);
    return function_expression;
    metadata([]);
}