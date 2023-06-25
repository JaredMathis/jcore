import { js_node_is_member_expression } from '../../../js/node/is/member/expression.mjs';
import { function_names_each_map } from '../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_nodes_each } from '../../../js/nodes/each.mjs';
import { noop } from '../../../noop.mjs';
export async function rule_member_expression_none() {
    arguments_assert(arguments, []);
    await function_names_each_map(args => {
        js_nodes_each(args, js_node_is_member_expression, noop);
    });
}