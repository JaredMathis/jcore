import { js_node_is_return_statment } from '../../../js/node/is/return/statment.mjs';
import { log } from '../../../log.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_visit_nodes_filtered } from '../../../js/visit/nodes/filtered.mjs';
export function refactor_output_to_object(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed, function_declaration} = args;
    js_visit_nodes_filtered(parsed, js_node_is_return_statment, v => {
        let {node} = v;
        console.log({ t: node.type });
    });
}