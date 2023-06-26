import { metadata } from '../../../metadata.mjs';
import { list_adder } from '../../../list/adder.mjs';
import { js_visit_nodes_call_expression_name_equal } from '../../visit/nodes/call/expression/name/equal.mjs';
import { js_node_is_program } from '../../node/is/program.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_call_expressions_named(parsed, name_expected) {
    arguments_assert(arguments, [
        js_node_is_program,
        defined_is
    ]);
    let v = list_adder(then);
    return v;
    function then(list_new_then_add) {
        js_visit_nodes_call_expression_name_equal(parsed, name_expected, list_new_then_add);
    }
    metadata([]);
}