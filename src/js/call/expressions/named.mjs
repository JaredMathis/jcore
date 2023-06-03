import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../../list/add.mjs';
import { equal } from '../../../equal.mjs';
import { js_call_expression_to_name_or_null } from '../expression/to/name/or/null.mjs';
import { js_node_is_call_expression } from '../../node/is/call/expression.mjs';
import { js_visit_nodes } from '../../visit/nodes.mjs';
export function js_call_expressions_named(parsed, name_expected) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let matches = [];
    js_visit_nodes(parsed, node => js_node_is_call_expression(node), v => {
        let {node} = v;
        const name_actual = js_call_expression_to_name_or_null(node);
        if (name_actual !== null) {
            if (equal(name_actual, name_expected)) {
                list_add(matches, node);
            }
        }
    });
    return matches;
}