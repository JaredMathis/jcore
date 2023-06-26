import { multiply } from '../../../../../multiply.mjs';
import { subtract } from '../../../../../subtract.mjs';
import { or } from '../../../../../or.mjs';
import { js_node_is_logical_expression } from '../../../../../js/node/is/logical/expression.mjs';
import { js_node_is_binary_expression } from '../../../../../js/node/is/binary/expression.mjs';
import { and } from '../../../../../and.mjs';
import { rule_operator_to_function_call_generic } from './generic.mjs';
import { equal } from '../../../../../equal.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { equal_not } from '../../../../../equal/not.mjs';
import { less_than } from '../../../../../less/than.mjs';
export async function rule_operator_to_function_call_multiple() {
    arguments_assert(arguments, []);
    await rule_operator_to_function_call_generic(equal, '===', js_node_is_binary_expression);
    await rule_operator_to_function_call_generic(equal_not, '!==', js_node_is_binary_expression);
    await rule_operator_to_function_call_generic(and, '&&', js_node_is_logical_expression);
    await rule_operator_to_function_call_generic(or, '||', js_node_is_logical_expression);
    await rule_operator_to_function_call_generic(less_than, '<', js_node_is_binary_expression);
    await rule_operator_to_function_call_generic(subtract, '-', js_node_is_binary_expression);
    await rule_operator_to_function_call_generic(multiply, '*', js_node_is_binary_expression);
}