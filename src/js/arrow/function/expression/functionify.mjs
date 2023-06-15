import { js_brace_left_right } from '../../../brace/left/right.mjs';
import { js_code_parenthesis_surround } from '../../../code/parenthesis/surround.mjs';
import { js_keyword_function } from '../../../keyword/function.mjs';
import { js_node_is_arrow_function_expression } from '../../../node/is/arrow/function/expression.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_parse } from '../../../parse.mjs';
export function js_arrow_function_expression_functionify(node) {
    arguments_assert(arguments, [js_node_is_arrow_function_expression]);
    let function_code = `${ js_keyword_function() } ${ js_code_parenthesis_surround(``) }${ js_brace_left_right() }`;
    let function_expression = js_parse(function_code);
}