import { js_node_is_binary_expression } from '../../../../../js/node/is/binary/expression.mjs';
import { and } from '../../../../../and.mjs';
import { rule_operator_to_function_call_generic } from './generic.mjs';
import { equal } from '../../../../../equal.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function rule_operator_to_function_call_multiple() {
    arguments_assert(arguments, []);
    await rule_operator_to_function_call_generic(equal, '===', js_node_is_binary_expression);
    await rule_operator_to_function_call_generic(and, '&&', js_node_is_binary_expression);
}