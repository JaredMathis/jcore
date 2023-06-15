import { js_code_return_statement } from '../../../code/return/statement.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { log } from '../../../../log.mjs';
import { js_brace_left_right } from '../../../brace/left/right.mjs';
import { js_code_parenthesis_surround } from '../../../code/parenthesis/surround.mjs';
import { js_keyword_function } from '../../../keyword/function.mjs';
import { js_node_is_arrow_function_expression } from '../../../node/is/arrow/function/expression.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_parse_expression } from '../../../parse/expression.mjs';
export function js_arrow_function_expression_functionify(node, name) {
    arguments_assert(arguments, [
        js_node_is_arrow_function_expression,
        arguments_assert_todo
    ]);
    let function_code = `${ js_keyword_function() } ${ name }${ js_code_parenthesis_surround(``) }${ js_brace_left_right() }`;
    let function_expression = js_parse_expression(function_code);
    js_code_return_statement();
    console.log({
        node,
        function_expression
    });
}