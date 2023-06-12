import { js_visit_nodes_call_expression_name_equal } from '../../visit/nodes/call/expression/name/equal.mjs';
import { js_node_is_program } from '../../node/is/program.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../../list/add.mjs';
export function js_call_expressions_named(parsed, name_expected) {
    arguments_assert(arguments, [
        js_node_is_program,
        defined_is
    ]);
    let matches = [];
    then(lambda);
    return matches;
    function then(lambda) {
        js_visit_nodes_call_expression_name_equal(parsed, name_expected, lambda);
    }

    function lambda(node) {
        list_add(matches, node);
    }
}