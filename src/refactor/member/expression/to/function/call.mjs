import { js_visit_nodes } from '../../../../../js/visit/nodes.mjs';
import { js_node_is_type_member_expression } from '../../../../../js/node/is/type/member/expression.mjs';
import { log } from '../../../../../log.mjs';
export function refactor_member_expression_to_function_call(args) {
    let {parsed} = args;
    js_visit_nodes(parsed, js_node_is_type_member_expression, v => {
        let node = object_property_get(v, 'node');
        if (object_property_get(node, 'name') === 'name') {
        }
    });
}