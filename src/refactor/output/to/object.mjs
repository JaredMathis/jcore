import { js_visit_nodes_filter_node } from '../../../js/visit/nodes/filter/node.mjs';
import { list_new_then } from '../../../list/new/then.mjs';
import { js_node_is_return_statment } from '../../../js/node/is/return/statment.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function refactor_output_to_object(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed, function_declaration} = args;
    list_new_then(function then(list_new_then_add) {
        js_visit_nodes_filter_node(parsed, js_node_is_return_statment, list_new_then_add);
    });
}