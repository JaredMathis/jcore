import { js_node_is_type_member_expression } from '../../../../../js/node/is/type/member/expression.mjs';
import { js_visit } from '../../../../../js/visit.mjs';
import { log } from '../../../../../log.mjs';
export function refactor_property_get_to_function_call(args) {
    let {parsed} = args;
    js_visit(parsed, n => js_node_is_type_member_expression(n), n => log(n));
}