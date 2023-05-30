import { js_node_is_type_member_expression } from '../../../../../js/node/is/type/member/expression.mjs';
import { js_visit } from '../../../../../js/visit.mjs';
import { log } from '../../../../../log.mjs';
export function refactor_member_expression_to_function_call(args) {
    let {parsed} = args;
    js_visit_nodes(parsed, js_node_is_type_member_expression, n => log(n));
}