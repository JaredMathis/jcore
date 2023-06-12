import { js_node_call_expression_name_equal } from '../../node/call/expression/name/equal.mjs';
import { js_node_is_program } from '../../node/is/program.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../../list/add.mjs';
import { js_node_is_call_expression } from '../../node/is/call/expression.mjs';
import { js_visit_nodes_filter } from '../../visit/nodes/filter.mjs';
export function js_call_expressions_named(parsed, name_expected) {
    arguments_assert(arguments, [
        js_node_is_program,
        defined_is
    ]);
    let matches = [];
    js_visit_nodes_filter(parsed, node => js_node_is_call_expression(node), v => {
        let {node} = v;
        if (js_node_call_expression_name_equal(node, name_expected)) {
            list_add(matches, node);
        }
    });
    return matches;
}