import { js_nodes_get } from '../../js/nodes/get.mjs';
import { log } from '../../log.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { js_node_is_type } from '../../js/node/is/type.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    log(js_nodes_get(parsed, n => js_node_is_type(n, 'ObjectPattern')));
}