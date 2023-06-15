import { js_keyword_function } from '../../../keyword/function.mjs';
import { js_node_is_arrow_function_expression } from '../../../node/is/arrow/function/expression.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_arrow_function_expression_functionify(node) {
    arguments_assert(arguments, [js_node_is_arrow_function_expression]);
    let function_code = `${ js_keyword_function() }`;
}