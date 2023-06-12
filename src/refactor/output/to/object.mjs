import { js_callable_multiple_assert_not } from '../../../js/callable/multiple/assert/not.mjs';
import { js_node_is_return_statment } from '../../../js/node/is/return/statment.mjs';
import { log } from '../../../log.mjs';
import { js_visit_nodes_all } from '../../../js/visit/nodes/all.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function refactor_output_to_object(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed, function_declaration} = args;
    js_visit_nodes_all(parsed, v => {
        let {node} = v;
        js_node_is_return_statment(node);
        console.log({ node });
    });
}