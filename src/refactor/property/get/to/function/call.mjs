import { noop } from '../../../../../noop.mjs';
import { tautology } from '../../../../../tautology.mjs';
import { js_visit } from '../../../../../js/visit.mjs';
import { log } from '../../../../../log.mjs';
import { js_node_is_type } from '../../../../../js/node/is/type.mjs';
export function refactor_property_get_to_function_call(args) {
    let {parsed} = args;
    js_visit(parsed, n => js_node_is_type_member_expression(n), n => log(n));
}

function js_node_is_type_member_expression(n) {
    return js_node_is_type(n, 'MemberExpression');
}
